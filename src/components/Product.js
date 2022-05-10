import React from "react"; // 3.5
import "./Product.css"; // 3.5
import { useStateValue } from "../data-layer/StateProvider"; // 4.6

function Product({
  id,
  title,
  price,
  rating,
  image /* **** 3.6 don't forget {} for multiple parameters as props inside a component function..... else blank page */,
}) {
  
  const [ {basket}, dispatch] = useStateValue()

  console.log("this is basket initial state" , basket)

  const addToBasket = () => { /* 4.6 */
  
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      } /* 4.6 */
    })
  } /* 4.6 */

  return (
    <div className="product">
      {" "}
      {/* 3.5 */}
      <div className="product__info">
        <p>{title }</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <div className="product__rating">
        { /* **** curly {} important */
          Array(rating/* **** No curly {} */ ) /* makes an array with slots = rating number */
          .fill()
          .map((_, i) => ( /* ARROW function BLOCK inside RETURN has simple () instead of {}*/
            <p>⭐</p>
            )) 
        }
      </div>

      <img src={image} alt={title} />

      <button onClick={addToBasket}>Add to Cart</button>
      {console.log("yay product")}
    </div>
  );
}

export default Product;
