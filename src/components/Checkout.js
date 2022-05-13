import React from 'react' // 4.1
import "./Checkout.css" // 4.1

import Subtotal from './Subtotal' // 4.3

import CheckoutProduct from './CheckoutProduct' // 6.2

import { useStateValue } from '../data-layer/StateProvider' // 6.2

function Checkout() { /* 4.1 */

  const [{basket, user /* 8.3 */}, dispatch] = useStateValue() // 6.2

  return (
      <div className='checkout'>

      <div className='checkout__left'>
          <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1" alt="" />

      <div>
          <h3>Hello {user ? user?.email:""}</h3> {/* 8.3 */}
          <h2 className='checkout__title'>Your shopping Basket</h2>
          {basket?.map( (item) => ( /* 6.2 */
            
            <CheckoutProduct
            id = {item.id}
            title = {item.title}
            price = {item.price}
            rating = {item.rating}
            image = {item.image}
            />
          ) )}
          {console.log(basket.image)}
      </div>
        
      </div>

      <div className='checkout__right'>
        
          <Subtotal/> {/* 4.3 */}
      </div>
        {console.log("yay checkout")}
      </div>

      
  )
}

export default Checkout