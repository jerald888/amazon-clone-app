import React from 'react'
import "./Payment.css"; // 15.2.css

import { useStateValue } from '../data-layer/StateProvider'; // 15.2
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom'; // 15.2


function Payment() { /* 15.1 */

const [{basket, user}, dispatch] = useStateValue()

  return ( /* 15.1 */
    <div className='payment'>
        <div className='payment__container'>
            <h1> {/* 15.2 */}
                Checkout {<Link to = "/checkout">{basket?.length} items</Link>}
            </h1>

            <div className='payment__section'> {/* 15.2 */}
                {/* address */}
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>255 React Lane</p>
                    <p>JS city</p>
                    <p>8081</p>
                </div>
            </div>
            <div className='payment__section'> {/* 15.2 */}
                {/* basket items */}
                <div className='payment__title'>
                    <h3>Review Items and delivery</h3>
                </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                
            </div>
            <div className='payment__section'> {/* 15.2 */}
                {/* payment method */} {/* 15.2 */}
                <div className='payment__title'>
                    <h3>Payment method</h3>
                </div>
                <div className='payment__details'> {/* 15.2 */}
                    {/* stripe js details here */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment