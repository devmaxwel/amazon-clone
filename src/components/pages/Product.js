import React from 'react'
import './product.css'
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { useStateValue } from '../context/StateProvider';

const Product = ({title,image,price,rating,id}) => {
  const [{basket},dispatch ] = useStateValue();
  console.log(basket)
  
  const addToCart=()=> {
        dispatch({
          type:"ADD_TO_BASKET",
          payload:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating
          }
        })
  }


  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarRateRoundedIcon i={i} style={{ color: "gold" }} />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToCart}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;