import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";

const CheckOut = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">{basket.length > 0?"Your Shopping Basket":"Your Shopping Basket is Lonely"}</h2>
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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default CheckOut;
