import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const composeEnhancers = process.env.NODE_ENV !== 'production' && 

    // for universal ("isomorphic") apps
    typeof window !== 'undefined' && 

    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(
    rootReducer, 
    preloadedState,
    enhancer
  );

  let sagaTask = sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });

    module.hot.accept('./sagas', () => {
      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(rootSaga);
      });
    });
  }

  return store;
};
