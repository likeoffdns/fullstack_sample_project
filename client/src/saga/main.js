import { all } from 'redux-saga/effects';
import { usersSaga } from './users';
import { ordersSaga } from './orders';
import { itemsSaga } from './items';

export default function* rootSaga() {
  yield all([
    usersSaga(),
    ordersSaga(),
    itemsSaga()
  ]);
}