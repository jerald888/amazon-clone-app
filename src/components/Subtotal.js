import React from 'react' 
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"; // 4.3 **** import linke has no {} if {} then white page error

import { useStateValue } from '../data-layer/StateProvider'; // 5.1

import { getBasketTotal } from '../data-layer/reducer'; // 6.1



function Subtotal() { /* 4.3 */

 const [{basket}, dispatch] = useStateValue() // 5.1 and 6.1

 getBasketTotal()

  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText = {(value) => (
            <>
                <p>
                    Subtotal ( {basket?.length}  {/* 5.1 */}items) : <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox" />
                    This order contains a gift
                </small>
            </>
        )}
        value = {getBasketTotal(basket)} // 4.3
        prefix = {"$"} // 4.3
        decimalScale = {2} // 4.3
        displayType = {"text"} // 4.3
        thousandSeparator = {true} // 4.3
        
        /> {/* 4.3 */}

        <button>Proceed to Checkout</button> {/* 4.3 */}
    
    </div>
  )
}

export default Subtotal