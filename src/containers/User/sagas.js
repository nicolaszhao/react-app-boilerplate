import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api';
import { actions } from './reducers';

export function* fetchUser({ payload }) {
  try {
    const user = yield call(api.fetchUser, payload.userId);

    yield put(actions.fetchUserCompleted(user));
  } catch (err) {
    yield put(actions.fetchUserCompleted(err));
  }
}

export default function* watchUser() {
  yield takeEvery('FETCH_USER', fetchUser);
}
