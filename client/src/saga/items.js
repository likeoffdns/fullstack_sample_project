import { put, takeLatest, call} from 'redux-saga/effects';
import {setItems, addItem,deleteItem,updateItem} from '../actions/items';


export const GET_ITEMS = 'SAGA_GET_ITEMS'
export const ADD_ITEM = 'SAGA_ADD_ITEM'
export const UPDATE_ITEM = 'SAGA_UPDATE_ITEM'
export const DELETE_ITEM = 'SAGA_DELETE_ITEM'


export const loadItems = async() => fetch('http://localhost:3001/items').then(response => response.json())


export function* getItems () {
    const items = yield call(loadItems)
    yield put(setItems(items))
}

export const postItem = async (payload) => {
    return fetch('http://localhost:3001/item',
    {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })
    .then(response => response.json());
}

export function* createItem({payload}) {
    const createItem = yield call(postItem, payload);
    yield put(addItem(createItem))
}

export const putItem = async(id,payload) => fetch(
    `http://localhost:3001/items/${id}`,
    {
    method: 'PUT',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify(payload)
}

).then(response => response.json());


export function* updItem({payload}) {
    const updatedItem = yield call(putItem, payload.id, payload.data);
    yield put(updateItem(payload.id, updatedItem))
}

export const delItem = async (id) => fetch(
	`http://localhost:3001/items/${id}`,
	{
		method: 'DELETE',
		headers: {
      		'Content-Type': 'application/json'
    	}
	}
).then(response => response.json());

export function* removeItem({payload}) {
  const deletedItem = yield call(delItem, payload.id);
  yield put(deleteItem(deletedItem));
}


export function* itemsSaga() {
    yield takeLatest(GET_ITEMS, getItems);
    yield takeLatest(ADD_ITEM, createItem);
    yield takeLatest(UPDATE_ITEM,updItem)
    yield takeLatest(DELETE_ITEM,removeItem)
}
