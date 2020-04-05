import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyFirstComponent from './MyFirstComponent';
import * as serviceWorker from './serviceWorker';
import MySecondComponent from './MySecondComponent';
import Component3 from './Component3';

ReactDOM.render(
  <React.StrictMode>
    <Component3 />
  </React.StrictMode>,
  document.getElementById('root123')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
