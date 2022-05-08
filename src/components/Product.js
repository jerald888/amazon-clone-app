import React from "react"; // 3.5
import "./Product.css"; // 3.5

function Product({
  title,
  price,
  rating,
  image /* **** 3.6 don't forget {} for multiple parameters as props inside a component function..... else blank page */,
}) {
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

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
