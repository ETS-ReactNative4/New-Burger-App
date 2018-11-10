import React,{Component} from 'react';
import Aux from '../../HOC/helper';
import Button from '../UI/Button/Button';
import classes from './OrderSummary.module.scss';
import Loader from '../UI/Loader/Loader';

class OrderSummary extends Component{
  
  render(){
    return(
      <Aux>
      {this.props.requestOrder?    
        <div className={classes.OrderSummary}>
          <h2>Your Order</h2>
          <p>A delicious Burger with the following ingredients:</p>
          <ul>
            <li>Salad:{this.props.ingredients.Salad}</li>
            <li>Bacon:{this.props.ingredients.Bacon}</li>
            <li>Cheese:{this.props.ingredients.Cheese}</li>
            <li>Meat:{this.props.ingredients.Meat}</li>
          </ul>
          <h2>Total Price: {this.props.totalPrice}</h2>
          <Button btnType={'Danger'} clicked={this.props.closeModal}>CANCEL</Button>
          <Button btnType={'Success'} clicked={this.props.buy}>CONTINUE</Button>
        </div>
      :null
       }
      </Aux>
    )
  }
};
export default OrderSummary;