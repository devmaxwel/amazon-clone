import React from 'react'
import './order.css'

const Order = ({order}) => {
    console.log(order)
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{order.created}</p>
    </div>
  )
}

export default Order;