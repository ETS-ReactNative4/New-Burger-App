import React,{Component} from 'react';
import classes from './TotalOrders.module.scss';
import Loader from '../../components/UI/Loader/Loader';
import Order from './Order/Order';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class TotalOrders extends Component{

  render(){
    let result; 
    result= <div className={classes.container}>
      <Link to="/"><button className={classes.button}>Go Back</button></Link>
      <ul className={classes.ul}>
          {this.props.orders.map((order,index)=>
            <Order key={index} 
                  ingredients={order.ingredients} 
                  CustomerInfo={order.CustomerInfo}
                  totalPrice={order.totalPrice}
                  orderTime={order.orderTime}
                  cancelOrderTime={order.cancelOrderTime}
                  id={order.id}
            />
          )}
      </ul>
      </div>
  
    return(result)
    
  }
}
const mapStateToProps=state=>{
  return{
    id:state.authReducer.id,
    orders:state.burgerReducer.orders
  }
}
export default connect(mapStateToProps)(TotalOrders);