import React from 'react'
import ItemEdit from './EditModal'
import {Button} from 'react-bootstrap'


const Item = ({ handleDelete,item}) => (
  <tr>
    <td>{item.title}</td>                                   
    <td>{item.description}</td>
    <td>{item.image}</td>
    <td>{item.weight}</td>
    <td>{item.price}</td>
    <td>{item.dimensions.length}</td>
    <td>{item.dimensions.height}</td>
    <td>{item.dimensions.width}</td>
    <td><Button onClick={handleDelete}>delete</Button></td>
    <td><ItemEdit item={item}/></td>
  </tr>
  
  
)

export default Item;