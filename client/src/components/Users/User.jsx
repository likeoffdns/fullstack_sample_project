import React from 'react'
import UserEdit from './EditModal'
import {Button} from 'react-bootstrap'


const User = ({ handleDelete,user}) => (
  <tr>
    <td>{user.firstName}</td>                                   
    <td>{user.lastName}</td>
    <td>{user.birthday}</td>
    <td>{user.adress[0].city}</td>
    <td>{user.adress[0].country}</td>
    <td>{user.adress[0].street1}</td>
    <td>{user.adress[0].street2}</td>
    <td>{user.rating}</td>
    <td><Button onClick={handleDelete}>delete</Button></td>
    <td><UserEdit
    user={user}
    /></td>
  </tr>
  
  
)

export default User
