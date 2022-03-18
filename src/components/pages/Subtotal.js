import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>{`${0}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={2}
        thousandSeparator={true}
        displayType={"text"}
        prefix={"£"}
      />
      <button>Proceed To CheckOut</button>
    </div>
  );
}

export default Subtotal;