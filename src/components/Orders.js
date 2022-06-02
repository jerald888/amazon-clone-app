import React from 'react'

import { db } from '../firebase' // 17.4
import { useStateValue } from '../data-layer/StateProvider' // 17.4
import { useEffect } from 'react' // 17.4
import { useState } from 'react' // 17.4
import "./Orders.css"

import Order from './Order' // 17.5


function Orders() { /* 17.2 */
const [{basket, user}, dispatch] = useStateValue() /* 17.4 */

const [orders, setOrders] = useState([])   /* 17.4 */

useEffect(() => {  /* 17.4 */
  if (user) {  /* 17.4 */
  db
  .collection("users") /* 17.4 */
  .doc(user?.uid) /* 17.4 */
  .collection("orders") /* 17.4 */
  .orderBy("created", "desc") /* 17.4 */
  .onSnapshot(snapshot => (  /* 17.4 */
    setOrders(snapshot.docs.map(doc => ({  /* 17.4 */
      id: doc.id, 
      data: doc.data()
    })))
  ))

  } else {  /* 17.4 */

    setOrders([])
  }
  
}, [user])


  return (
    <div className='orders'>Orders
      <h1>Your Orders</h1> {/* 17.5 */}

      <div className='orders__order'> {/* 17.5 */}
        {orders?.map(order => ( 
          <Order order= {order}/>
        ) )} {/* 17.5 */}
      </div> {/* 17.5 */}
    </div>
  )
}

export default Orders