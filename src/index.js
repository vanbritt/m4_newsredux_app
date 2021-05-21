import React from 'react';
import ReactDOM from 'react-dom';
import  Routing from './containers/Routing';

import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from "redux-promise"
import {Provider} from 'react-redux'
import reducer from './reducers'
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <Routing/>
  </Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
