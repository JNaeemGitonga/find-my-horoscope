import React from 'react';
import ReactDOM from 'react-dom';
import GetMyScope from './components/getmyscope';
import horoscopes from './horoscopes.json';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {zodiacReducer} from './reducers';

const store = createStore(zodiacReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <GetMyScope horoscopes={horoscopes} />
  </Provider>,
  document.getElementById('root')
);
