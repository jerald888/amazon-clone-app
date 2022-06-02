import React from 'react' 

import "./CheckoutProduct.css" // 6.2

import { useStateValue } from '../data-layer/StateProvider' // 6.3


function CheckoutProduct({id, image, title, price, rating, hideButton /* 17.5 hide button prop for hiding button in orders page */ }) { /* 6.2 **** don't forget curly{}.... else won't render */  

const [{bucket}, dispatch] = useStateValue() // 6.3

const removeFromBasket = () => { /* 6.3 */
// alert("removeformbass")
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id
    })
}



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

        {!hideButton && /* 17.5 only renders if there is no hidebutton prop */ ( 
            <button onClick = {removeFromBasket} >Remove from Basket</button>
            
            )}
            {/* 6.3 don't put () for an arrow function else repeats alert with out clickink */}

       


        </div> {/* 6.2 */}
    </div>
  )
}

export default CheckoutProduct