import React from 'react'
import EditWindow from './Modal'
import {Button} from 'react-bootstrap'

const Order = ({ handleDelete,order}) => (
  <tr>
    <td>{order.orderNumber}</td>                                   
    <td>{order.customer}</td>
    <td>{order.orderDate}</td>
    <td>{order.shippingDate}</td>
    <td>{order.cost}</td>
    <td>{order.items[0].itemId}</td>
    <td><Button onClick={handleDelete}>delete</Button></td>
    <td><EditWindow 
    order={order}/></td>
  </tr>
  
  
)

export default Order
