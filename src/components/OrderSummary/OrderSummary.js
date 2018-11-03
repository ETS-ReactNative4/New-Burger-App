import React from 'react';
import Aux from '../../HOC/helper';
import Button from '../UI/Button/Button';
import classes from './OrderSummary.module.scss';
const OrderSummary=(props)=>{
  return(
    <Aux>
    {props.requestOrder?    
      <div className={classes.OrderSummary}>
        <h2>Your Order</h2>
        <p>A delicious Burger with the following ingredients:</p>
        <ul>
          <li>Salad:{props.ingredients.Salad}</li>
          <li>Bacon:{props.ingredients.Bacon}</li>
          <li>Cheese:{props.ingredients.Cheese}</li>
          <li>Meat:{props.ingredients.Meat}</li>
        </ul>
        <h2>Total Price: {props.totalPrice}</h2>
        <Button btnType={'Danger'} clicked={props.closeModal}>CANCEL</Button>
        <Button btnType={'Success'} clicked={props.buy}>CONTINUE</Button>
      </div>
    :null
     }
    </Aux>
  )
};
export default OrderSummary;