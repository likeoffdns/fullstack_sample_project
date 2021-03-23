import { put, takeLatest, call} from 'redux-saga/effects';
import {setOrders, addOrder,deleteOrder,updateOrder} from '../actions/orders'

export const GET_ORDERS = 'SAGA_GET_ORDERS'
export const ADD_ORDER = 'SAGA_GET_ORDER'
export const DELETE_ORDER = 'SAGA_DELETE_ORDER'
export const UPDATE_ORDER = 'SAGA_UPDATE_ORDER'


export const loadOrders = async() => fetch('http://localhost:3001/orders').then(response => response.json())

export function* getOrders() {
    const orders = yield call(loadOrders);
    yield put(setOrders(orders));
  }

  export const postOrder = async (payload) => {
	return fetch('http://localhost:3001/order',
	{
		method: 'POST',
		headers: {
      		'Content-Type': 'application/json'
    	},
		body: JSON.stringify(payload),

	})
	.then(response => response.json());
}
	
export function* createOrder({payload}) {
  const createdOrder = yield call(postOrder, payload);
  yield put(addOrder(createdOrder));
}

export const putOrder = async (id, payload) => fetch(
	`http://localhost:3001/orders/${id}`,
	{
		method: 'PUT',
		headers: {
      		'Content-Type': 'application/json'
    	},
		body: JSON.stringify(payload)
	}
).then(response => response.json());

export function* updOrder({payload}) {
  const updatedOrder = yield call(putOrder, payload.id, payload.data);
  yield put(updateOrder(payload.id, updatedOrder));
}

export const delOrder = async (id) => fetch(
	`http://localhost:3001/orders/${id}`,
	{
		method: 'DELETE',
		headers: {
      		'Content-Type': 'application/json'
    	}
	}
).then(response => response.json());

export function* removeOrder({payload}) {
  const deletedOrder = yield call(delOrder, payload.id);
  yield put(deleteOrder(deletedOrder));
}





  export function* ordersSaga() {
     yield takeLatest(GET_ORDERS, getOrders);
     yield takeLatest(ADD_ORDER, createOrder);
     yield takeLatest(UPDATE_ORDER, updOrder);
     yield takeLatest(DELETE_ORDER, removeOrder);
  }
  
  