import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import { actions } from './reducers';

function* fetchUser({ payload }) {
  yield put(actions.fetchUserStart());

  try {
    const user = yield call(api.getUser, payload.userId);

    yield put(actions.fetchUserCompleted(user));
  } catch (err) {
    yield put(actions.fetchUserCompleted(err));
  }

  yield put(actions.fetchUserEnd());
}

export default function* watchUser() {
  yield takeEvery('FETCH_USER', fetchUser);
}
