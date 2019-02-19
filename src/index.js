import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from "react-router-dom";
import { createStore,applyMiddleware, compose,combineReducers } from 'redux';
import { Provider } from 'react-redux'
import burgerReducer from './store/burgerReducer';
import adminReducer from './store/adminReducer';
import thunk from 'redux-thunk';
import authReducer from './store/authReducer';
import filterReducer from './store/filterReducer';
import {firebase} from './firebase/firebase';
import {signIn} from './store/Actions/auth';
import {getAllOrders} from './store/Actions/get_All_Orders';
import { faCode, faHighlighter,faMoneyBill ,faEnvelope, faThumbsUp,faPlus, faPlusCircle,faAngleDown,faCheck} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faMoneyBill,
  faCode,
  faHighlighter,
  faEnvelope,
  faFacebook,
  faGoogle,
  faThumbsUp,
  faPlusCircle,
  faAngleDown,
  faCheck
  // more icons go here
);

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer={
  burgerReducer:burgerReducer,authReducer:authReducer,adminReducer:adminReducer,filterReducer:filterReducer  }
const store=createStore(combineReducers(rootReducer),composeEnhancer(applyMiddleware(thunk)));
                       
const app= <Provider store={store}>
              <BrowserRouter> 
                <App />
              </BrowserRouter>
            </Provider>
  firebase.auth().onAuthStateChanged(user=> {  
    if (user) {    
      if(store.getState().authReducer.sign_In_With_Email){
        store.dispatch(signIn(user.uid));
        localStorage.setItem('id',user.uid);
        store.dispatch(getAllOrders(user.uid));
        store.dispatch({type:'SIGNUP_LINK_FALSE'})
      }     
    }else{
      localStorage.removeItem('id');
      store.dispatch({type:'SIGNUP_LINK_TRUE'})
    }
  });

  //FETCH ALL BURGER FROM ADMIN

  fetch(`https://admin-testing-burger-project.firebaseio.com/All Burgers.json`).
  then(res=>res.json())
  .then(data=>{
    let allBurgers=[];
    let prices={};
    for(let key in data){
      const info={
        id:key,
        ...data[key]
      }
      allBurgers.push(info);
      prices[data[key].name]=data[key].price;
    }

    return {allBurgers,prices};
  }).then(({allBurgers,prices})=>{
    if(!!allBurgers){
      store.dispatch({type:'FETCH_BURGERS_FROM_ADMIN',allBurgers,prices})

    }
 
  })
ReactDOM.render(app, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
export default store;