import { createActions, handleActions, combineActions } from 'redux-actions';

const defaultState = { count: 1 };

export const actions = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount }),
  INCREMENT_ASYNC: (amount = 1) => ({ amount }),
});

const { increment, decrement } = actions;

const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (state, { payload: { amount } }) => ({
      ...state,
      count: state.count + amount,
    }),
  },
  defaultState,
);

export default reducer;
