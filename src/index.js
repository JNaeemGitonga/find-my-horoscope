import React from 'react';
import ReactDOM from 'react-dom';
import GetMyScope from './components/getmyscope';
import horoscopes from './horoscopes.json';
import './index.css';

ReactDOM.render(
  <GetMyScope horoscopes={horoscopes} />,
  document.getElementById('root')
);
