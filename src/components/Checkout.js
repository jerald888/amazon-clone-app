import React from 'react' // 4.1
import "./Checkout.css" // 4.1
import Subtotal from './Subtotal' // 4.3


function Checkout() { /* 4.1 */
  return (
      <div className='checkout'>

      <div className='checkout__left'>
          <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1" alt="" />

      <div>
          <h2 className='checkout__title'>Your shopping Basket</h2>
      </div>

      </div>

      <div className='checkout__right'>
          <Subtotal/>
      </div>
        {console.log("yay checkout")}
      </div>

      
  )
}

export default Checkout