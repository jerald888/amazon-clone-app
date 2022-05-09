import React from 'react' // 3.8
import "./Checkout.css" // 3.8


function Checkout() { /* 3.8 */
  return (
      <div className='checkout'>

      <div className='checkout__left'>
          <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1" alt="" />

      <div>
          <h2 className='checkout__title'>Your shopping Basket</h2>
      </div>
      
      </div>

      <div className='checkout__right'>
          <h2>total price here</h2>
      </div>

      </div>

      
  )
}

export default Checkout