import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Order from './Order';
import {Table} from 'react-bootstrap'
import { GET_ORDERS,DELETE_ORDER } from '../../saga/orders';


const OrderList = () => {
  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch({type:GET_ORDERS});
  },[dispatch])
  return (
    <Table>
      <thead>
  <tr>
    <th>Order Number</th>
    <th>Customer</th>
    <th>Order Date</th>
    <th>Shipping Date</th>
    <th>Cost</th>
    <th>Item ID</th>
  </tr>
  </thead>
  <tbody>
      {orders.map(order =>
        <Order
          order={order}
          key={order.id} 
          handleDelete = {() => dispatch({type:DELETE_ORDER, payload:{id:order.id}})}                       
       />
      )}
  </tbody>
    </Table>
  )
}

export default OrderList;
