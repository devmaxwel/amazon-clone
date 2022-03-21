import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../../axios";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../reducers/reducer";
import CheckOutProduct from "./CheckOutProduct";
import CircularProgress from "@mui/material/CircularProgress";
import "./payment.css";
import { addDoc, collection, doc} from "firebase/firestore";
import { database } from "../config/firebaseConfig";
import { Alert } from "@mui/material";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useNavigate();

  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [clientSecret, setclientSecret] = useState("");
        
  const handleCardsubmit = async (e) => {
    e.preventDefault();
    // submits users requests
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent is payment confirmation
        const databaseRef = collection(database, "order",doc(database, user?.uid))
        addDoc(databaseRef, {
          amaount: paymentIntent.amount,
          basket: basket,
          created: paymentIntent.created,
        });
        setError(null);
        setSucceded(true);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history("/orders");
      });
    return payload;
  };

  const handleOnChange = (e) => {
    // listens to users keystroke
    // displays error in realtime
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  useEffect(() => {
    let unsubscribe = true;
    const getClientSecret = async () => {
      if (unsubscribe) {
        const response = await instance({
          method: "post",
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        setclientSecret(response.data.clientSecret);
      }
    };
    getClientSecret();
    return () => {
      unsubscribe = false;
    };
  }, [basket]);

  console.log("The secret", clientSecret);

  const total = getBasketTotal(basket);

  return (
    <div className="payment">
      <h1>
        CheckOut (<Link to="/checkout">{basket?.length}</Link>) Items
      </h1>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>React Lane</p>
            <p>Nairobi, Kasarani Area</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((b) => {
              return (
                <CheckOutProduct
                  title={b.title}
                  id={b.id}
                  img={b.image}
                  rating={b.rating}
                  price={b.price}
                />
              );
            })}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleCardsubmit}>
              <CardElement
                style={{
                  display: "flex",
                }}
                onChange={handleOnChange}
              />
              <div className="payment__pricecontainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  thousandSeparator={true}
                  displayType={"text"}
                  prefix={"$"}
                />
                <button
                  disabled={disable || processing || succeded || total < 1 || error}
                >
                  <span>
                    {processing ? (
                      <p>
                        <CircularProgress
                          size="1rem"
                          style={{
                            fontSize: "10px",
                            color:"#fff"
                          }}
                        />
                      </p>
                    ) : (
                      "Pay Now"
                    )}
                  </span>
                </button>
              </div>
              {error && <Alert>{error}</Alert>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
