import { createActions, handleActions, combineActions } from 'redux-actions';

const defaultState = {
  fetching: false,
  data: {},
  error: null
};

export const actions = createActions({
  FETCH_USER: (userId) => ({ userId }),
  FETCH_USER_START: () => ({ fetching: true }),
  FETCH_USER_END: () => ({ fetching: false }),
  FETCH_USER_COMPLETED: data => data
});

const { fetchUserStart, fetchUserEnd, fetchUserCompleted } = actions;

const reducer = handleActions(
  {
    [combineActions(fetchUserStart, fetchUserEnd)]: (state, { payload }) => {
      return {
        ...state,
        ...payload
      };
    },
    [fetchUserCompleted]: {
      next(state, { payload }) {
        return {
          ...state,
          data: payload,
          error: null
        };
      },
      throw(state, { payload }) {
        return {
          ...state,
          data: {},
          error: payload
        };
      }
    }
  },
  defaultState
);

export default reducer;
