import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './components/Layout/Layout';
import  './App.scss';
import {Route} from 'react-router-dom';
const App=()=>( 
      <Layout >
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout" exact component={Checkout}/>
      </Layout>

  )
export default App;
