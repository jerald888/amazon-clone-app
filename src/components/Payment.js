import React from 'react'
import "./Payment.css"; // 15.2.css

import { useStateValue } from '../data-layer/StateProvider'; // 15.2
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom'; // 15.2

import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js" // 16.1

import { useState } from 'react';  // 16.2
import CurrencyFormat from "react-currency-format"; // 16.2 **** import link has no {} if {} then white page error
import { getBasketTotal } from '../data-layer/reducer'; // 16.2

import { useEffect } from 'react'; // 16.3
import axios from 'axios'; // 16.3
import instance from '../axios/axios'; // 16.3

import { useNavigate } from 'react-router-dom'; // 16.4



function Payment() { /* 15.1 */

const navigate = useNavigate()

const [clientSecret, setClientSecret] = useState(true) // 16.3

const [processing, setProcessing] = useState(false) // 16.2
const [succeeded, setSucceeded] = useState("") // 16.2

const [error, setError] = useState(null) // 16.2
const [disabled, setDisabled] = useState(true) // 16.2

const stripe = useStripe() // 16.1
const elements = useElements() // 16.1

const [{basket, user}, dispatch] = useStateValue()


useEffect(() => { /* 16.3 */
    
    const getClientSecret = async () => { /* 16.3 */
        const response = await instance({ /* 16.3 */
            method: "post",
            url: `/payments/create?total=${getBasketTotal(basket) * 100}` /* 16.3 * 100 is because stripe only accepst currency amount in subunits*/

            // ***** always use the variable name in which base url is stored.... here INSTANCE.... and not axios
            
            /*  **** this url should be made in our backend.... and the response from this url will have the CLIENT SECRET KEY   */
        })

        setClientSecret(response.data.clientSecret) // 16.3
    }

    getClientSecret() /* 16.3 */
    
}, [basket]); // 16.3

console.log("the client secret is", clientSecret)


const handleSubmit = async /* 16.3 */ (e) => {
    // stripe stuff is here

    e.preventDefault() /* 16.3 */
    setProcessing(true) /* 16.3 when you click buy button, then button gets disabled as payment processing starts */

    const payload = await stripe.confirmCardPayment( clientSecret,{  /* 16.4 */
        payment_method: {  /* 16.4 */
            card: elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) => {  /* 16.4 */
        // paymentIntent = payment confirmation

        setSucceeded(true)  /* 16.4 */
        setError(null)  /* 16.4 */
        setProcessing(false)  /* 16.4 */

        dispatch({ /* 17.1 */
            type: "EMPTY_BASKET" /* 17.1 */
        })

        navigate("/orders", {replace: true}) // 16.4
        // **** replace prevents us from going back to payment page if we click back button


    })



    

} // 16.2

const handleChange = (e) => {
    // listens to the change in cardElement
    // display any error if any while typing card details
    setDisabled(e.empty) // 16.2
    setError(e.error ? error.message : "") // 16.2
}


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
                    <form onSubmit={handleSubmit}> {/* 16.1 */} {/* 16.2 on submit */}
                        <CardElement onChange={handleChange}/> {/* 16.1 */} {/* 16.2 onchange */}

                        <div className='payment__price'> {/* 16.2 */}
                            <CurrencyFormat /* 16.2 */
                                renderText = {(value) => (
                                    <>
                                        <h3>
                                            Order Total ( {basket?.length}  {/* 5.1 */}items) : <strong>{value}</strong>
                                        </h3>
                                        
                                    </>
                                )}
                                value = {getBasketTotal(basket)} // 16.2
                                prefix = {"$"} // 16.2
                                decimalScale = {2} // 16.2
                                displayType = {"text"} // 16.2
                                thousandSeparator = {true} // 16.2
            
                            /> {/* 16.2 */}

                        <button disabled = {
                            processing ||
                            disabled ||
                            succeeded
                        }> {/* 16.2 */}

                            <span> {/* 16.2 */}
                                {processing ? <p>Processing</p> :  "Buy Now"}
                            </span>

                        </button>

                        </div>

                        {/* to display error message 16.2 */}

                        {error && <div>{error}</div>} {/* 16.2 */}
                        

                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment