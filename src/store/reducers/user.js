import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  fetching: false,
  data: {},
  error: null,
};

export const actions = createActions({
  FETCH_USER: (userId) => ({ userId, fetching: true }),
  FETCH_USER_COMPLETED: (data) => data,
});

const { fetchUser, fetchUserCompleted } = actions;

const reducer = handleActions(
  {
    [fetchUser]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [fetchUserCompleted]: {
      next(state, { payload }) {
        return {
          ...state,
          fetching: false,
          data: payload,
          error: null,
        };
      },
      throw(state, { payload }) {
        return {
          ...state,
          fetching: false,
          error: payload,
        };
      },
    },
  },
  defaultState,
);

export default reducer;
