import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import TotalOrders from './containers/TotalOrders/TotalOrders';
import Signup from './containers/Signup/Signup';
import Layout from './components/Layout/Layout';
import  './App.scss';
import {Route,Switch} from 'react-router-dom';
const App=()=>( 
      <Layout >
       <Switch>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout"  component={Checkout}/>
        <Route path="/orders"  component={TotalOrders}/>
        <Route path="/signup"  component={Signup}/>
       </Switch>
      </Layout>
  )
export default App;
