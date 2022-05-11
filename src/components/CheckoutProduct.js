import React from 'react' 

import "./CheckoutProduct.css" // 6.2



function CheckoutProduct({id, image, title, price, rating}) { /* 6.2 **** don't forget curly{}.... else won't render */   

  return ( /* 6.2 */
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src= {image} alt= {title} />

        <div className='checkoutProduct__info'>
        
        <p className='checkoutProduct__title'>{title}</p>

        <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className='checkoutProduct__rating'>
            {Array(rating)
            .fill()
            .map( (_, i) => (
                <p>⭐</p>
            ) )} 
        </div>

        <button>Remove from Basket</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>


        </div> {/* 6.2 */}
    </div>
  )
}

export default CheckoutProduct