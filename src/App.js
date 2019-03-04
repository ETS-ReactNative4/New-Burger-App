import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Dashboard from './containers/Dashboard/Dashboard';
import SpecificBurger from './containers/SpecificBurger/SpecificBurger';
import Checkout from './containers/Checkout/Checkout';
import TotalOrders from './containers/TotalOrders/TotalOrders';
import NotFound from './containers/NotFound/NotFound';
import Signup from './containers/Signup/Signup';
import Signin from './containers/Signin/Signin';
import Layout from './components/Layout/Layout';
import  './App.scss';
import {Route,Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const App=()=>( 
      <Layout >
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path='/burger/:id' component={SpecificBurger}/>
          <Route path="/burgerBuilder" component={BurgerBuilder}/>
          <PrivateRoute path="/checkout"  component={Checkout}/>
          <PrivateRoute path="/orders"  component={TotalOrders}/>
          <Route path="/signup"  component={Signup}/>
          <Route path="/signin"  component={Signin}/>
          <Route component={NotFound} />
        </Switch>
      </Layout>
  )



export default App;
