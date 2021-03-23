import { createStore, applyMiddleware,combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/main';
import orders from './reducers/orders'
import items from './reducers/items'
import users from './reducers/users'

const reducer = combineReducers({
  orders,
  items,
  users
});

const initialState = { state: []}
export const configureStore = (state = initialState) => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		reducer,
		applyMiddleware(sagaMiddleware),
	);

	sagaMiddleware.run(rootSaga);
	return store;
}