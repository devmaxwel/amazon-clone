import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";

const CheckOut = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* Basket Ittem */}
          {/* Basket Ittem */}
          {/* Basket Ittem */}
        </div>
      </div>
      <div className="checkout__right">
          <Subtotal />
      </div>
    </div>
  );
};

export default CheckOut;
