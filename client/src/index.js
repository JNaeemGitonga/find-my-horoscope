import React from 'react';
import ReactDOM from 'react-dom';
import GetMyScope from './components/getmyscope';

import './index.css';
import {Provider} from 'react-redux';
import store from './store';




ReactDOM.render(
  <Provider store={store}>
    <GetMyScope  />
  </Provider>,
  document.getElementById('root')
);

