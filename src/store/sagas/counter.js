import { put, takeLatest, delay } from 'redux-saga/effects';
import { actions } from '../reducers/counter';

export function* incrementAsync({ payload }) {
  yield delay(1000);
  yield put(actions.increment(payload.amount));
}

export default function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}
