import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../context/StateProvider'
import { getBasketTotal } from '../reducers/reducer'
import { useNavigate } from 'react-router-dom'

const Subtotal = () => {

  const [{basket, user}]  = useStateValue();
  const history = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} {basket.length > 1 ? "items" : "item"}):
              <br />
              <strong>Total: {`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        displayType={"text"}
        prefix={"£"}
      />
      {user ? (
        <button onClick={() => history("/card/checkout")}>
          Proceed to Checkout
        </button>
      ) : (
        <button onClick={() => history("/signin")}>SignIn to Checkout</button>
      )}
    </div>
  );
}

export default Subtotal;