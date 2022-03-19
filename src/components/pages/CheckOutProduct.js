import React from 'react'
import './checkoutproduct.css'
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { useStateValue } from '../context/StateProvider';

const CheckOutProduct = ({id,img, title,price,rating}) => {

    const [{basket}, dispatch]= useStateValue();
    console.log(basket)
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            payload:id
        })
    }

  return (
    <div className="checkoutproduct" key={id}>
      <img className="checkoutproduc__image" alt={title} src={img} />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">
          {title}
          <p className="checkoutproduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                {" "}
                <StarRateRoundedIcon i={i} style={{ color: "gold" }} />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;