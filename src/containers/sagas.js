import { all } from 'redux-saga/effects';
import watchUser from './User/sagas';

export default function* rootSaga() {
  yield all([
    watchUser()
  ]);
}
