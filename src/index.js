import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {createStore ,  applyMiddleware , combineReducers } from "redux"
// import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk"
import App from './App';
import "tachyons" ;
import reportWebVitals from './reportWebVitals';
import {changeSignIn,auth,changeSignUp,loadUsers_plz,background,imageURL,faceBoxes} from "./reducers"

const rootReducer = combineReducers({changeSignIn,auth,changeSignUp,loadUsers_plz,background,imageURL,faceBoxes})

// const logger = createLogger()

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))


ReactDOM.render(

  <Provider store={store}>
    <App store={store} />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
