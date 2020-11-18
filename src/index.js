import React from 'react';
import ReactDOM from 'react-dom';
import App from './App4';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers/index';

const storeWithModdleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={storeWithModdleware(reducers)}>
      <App />
  </Provider>,
  document.getElementById('root')
);
