import { all } from 'redux-saga/effects';
import watchUser from './User/sagas';
import watchIncrementAsync from './Counter/sagas';

export default function* rootSaga() {
  yield all([
    watchUser(),
    watchIncrementAsync()
  ]);
}
