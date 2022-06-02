import React from 'react'
import "./Order.css" // 17.5
import moment from "moment" // 17.5
import CheckoutProduct from './CheckoutProduct' // 17.5
import CurrencyFormat from 'react-currency-format' // 17.5


function Order({order} /* 17.5 */)  {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p> {/* 17.5 shows time stamp using moment library */} 

        <p className='order__id'> {/* 17.5 */}
            <small>{order.id}</small>
        </p>

        {order.data.basket?.map(item => ( 
            <CheckoutProduct
                id= {item.id}
                title= {item.title}
                image= {item.image}
                price= {item.price}
                rating= {item.rating}
                hideButton
            /> 
        ))} {/* 17.5 */}

        <CurrencyFormat
           renderText={(value) => (
               <h3 className='order__total'>Order Total: {value}</h3>
           )} 
           decimalScale={2}
           value={order.data.amount /100}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
        /> {/* 17.5 */}




    </div>
  )
}

export default Order