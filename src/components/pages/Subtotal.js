import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../context/StateProvider'
import { getBasketTotal } from '../reducers/reducer'
import { Link } from 'react-router-dom'

const Subtotal = () => {

  const [{basket}]  = useStateValue();

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
      <button>
        <Link style={{
          color:"#000",
          textDecoration:"none"
        }} to='/card/checkout'> Proceed To CheckOut </Link>
      </button>
    </div>
  );
}

export default Subtotal;