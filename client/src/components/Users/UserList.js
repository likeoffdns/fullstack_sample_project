import React,{useEffect}from 'react'
import {useSelector, useDispatch} from 'react-redux'
import User from './User';
import {Table} from 'react-bootstrap'
import {GET_USERS, DELETE_USER} from '../../saga/users'


const UserList = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch({ type:GET_USERS});
    }, [dispatch]);
  return (
    <Table>
      <thead>
         <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>City</th>
            <th>Country</th>
            <th>Street 1</th>
            <th>Street 2</th>
            <th>Rating</th>
          </tr>
      </thead>
    <tbody>
      {users.map(user =>
        <User
          user={user}
          key={user.id} 
          handleDelete = {() => dispatch({type:DELETE_USER, payload: {id:user.id}})}                       
       />
        )}
    </tbody>
    </Table>
  )
}

export default UserList;
