import { createActions, handleActions, combineActions } from 'redux-actions';

const defaultState = {
  name: 'nz',
  email: 'nicolas__z@outlook.com',
  age: '21'
};

export const actions = createActions({
  UPDATE_NAME: (name) => ({ name: `${name}-zhao` }),
  UPDATE_EMAIL: (email) => ({ email }),
  UPDATE_AGE: (age) => ({ age: `${age} years old` })
});

const { updateName, updateEmail, updateAge } = actions;

const reducer = handleActions(
  {
    [combineActions(updateName, updateEmail, updateAge)]: (state, { payload }) => {
      return {
        ...state,
        ...payload
      };
    }
  },
  defaultState
);

export default reducer;
