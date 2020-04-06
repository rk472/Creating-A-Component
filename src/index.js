import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Component4 from './Component4';

ReactDOM.render(
  <React.StrictMode>
    <Component4 />
  </React.StrictMode>,
  document.getElementById('root123')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
