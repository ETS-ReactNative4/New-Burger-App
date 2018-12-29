import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import TotalOrders from './containers/TotalOrders/TotalOrders';
import Layout from './components/Layout/Layout';
import  './App.scss';
import {Route} from 'react-router-dom';
const App=()=>( 
      <Layout >
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/orders" exact component={TotalOrders}/>
      </Layout>

  )
export default App;
