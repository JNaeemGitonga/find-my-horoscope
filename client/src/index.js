import React from 'react';
import ReactDOM from 'react-dom';
import GetMyScope from './components/getmyscope';

import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {zodiacReducer} from './reducers';

const store = createStore(zodiacReducer, applyMiddleware(thunk));

console.log( 'your state b4 DOM Render', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <GetMyScope  />
  </Provider>,
  document.getElementById('root')
);

