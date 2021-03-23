import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Item from './Item';
import {Table} from 'react-bootstrap'
import {DELETE_ITEM, GET_ITEMS} from '../../saga/items'

const ItemList = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch({type:GET_ITEMS});
  },[dispatch])
  
  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Weight</th>
          <th>Price</th>
          <th>Length</th>
          <th>Height</th>
          <th>Width</th>
        </tr>
      </thead>
    <tbody>
        {items.map(item =>
          <Item
            item={item}
            key={item.id} 
            handleDelete = {() => dispatch({type:DELETE_ITEM, payload:{id:item.id}})}                       
        />
         )}
    </tbody> 
    </Table>
  )
}

export default ItemList;
