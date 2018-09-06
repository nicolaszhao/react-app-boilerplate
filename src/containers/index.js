import './polyfills';
import 'config/public-path';
import 'styles/base.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './app';

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
