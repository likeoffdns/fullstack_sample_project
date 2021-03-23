import { put, takeLatest, call} from 'redux-saga/effects';
import { setUsers, addUser, updateUser, deleteUser } from '../actions/users';

export const GET_USERS = 'SAGA_GET_USERS'
export const CREATE_USER = 'SAGA_CREATE_USER'
export const UPDATE_USER = 'SAGA_UPDATE_USER'
export const DELETE_USER = 'SAGA_DELETE_USER'


export const loadUsers = async() => fetch('http://localhost:3001/users').then(response => response.json());

export function* getUsers() {
  const users = yield call(loadUsers);
  yield put(setUsers(users));
}

export const postUser = async (payload) => {
	return fetch('http://localhost:3001/user',
	{
		method: 'POST',
		headers: {
      		'Content-Type': 'application/json'
    	},
		body: JSON.stringify(payload),

	})
	.then(response => response.json());
}
	

export function* createUser({payload}) {
  const createdUser = yield call(postUser, payload);
  yield put(addUser(createdUser));
}

export const putUser = async (id, payload) => fetch(
	`http://localhost:3001/users/${id}`,
	{
		method: 'PUT',
		headers: {
      		'Content-Type': 'application/json'
    	},
		body: JSON.stringify(payload)
	}
).then(response => response.json());

export function* updUser({payload}) {
  const updatedUser = yield call(putUser, payload.id, payload.data);
  yield put(updateUser(payload.id, updatedUser));
}

export const delUser = async (id) => fetch(
	`http://localhost:3001/users/${id}`,
	{
		method: 'DELETE',
		headers: {
      		'Content-Type': 'application/json'
    	}
	}
).then(response => response.json());

export function* removeUser({payload}) {
  const deletedUser = yield call(delUser, payload.id);
  yield put(deleteUser(deletedUser));
}

export function* usersSaga() {
  yield takeLatest(GET_USERS, getUsers);
  yield takeLatest(CREATE_USER, createUser);
  yield takeLatest(UPDATE_USER, updUser);
  yield takeLatest(DELETE_USER, removeUser);
}