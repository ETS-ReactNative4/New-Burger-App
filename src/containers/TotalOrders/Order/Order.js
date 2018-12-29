import React from 'react';
import classes from './Order.module.scss';

const Order=(props)=>{
  
  return(
  
        <li className={classes.li}>
          <div>
            <h3>Chicken: {props.ingredients.Chicken}</h3>
            <h3>Cheese: {props.ingredients.Cheese}</h3>
            <h3>Meat: {props.ingredients.Meat}</h3>
            <h3>Salad: {props.ingredients.Salad}</h3>
            <h2 style={{color:'white'}}>Total Price: {props.totalPrice}</h2>
          </div>
          <div>
          <h3>Name: {props.CustomerInfo.name}</h3>
            <h3>Email: {props.CustomerInfo.email}</h3>
            <h3>Address: {props.CustomerInfo.address}</h3>
            <h3>Mobile: {props.CustomerInfo.mobile}</h3>
          </div>         
        </li>

  )
}
export default Order;