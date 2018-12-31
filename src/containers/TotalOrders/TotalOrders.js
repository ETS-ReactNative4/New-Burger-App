import React,{Component} from 'react';
import classes from './TotalOrders.module.scss';
import Loader from '../../components/UI/Loader/Loader';
import Order from './Order/Order';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class TotalOrders extends Component{
  state={
    orders:[],
    loading:false
  }
  componentDidMount(){
    this.setState({loading:true});
    fetch(`https://testing-bc79f.firebaseio.com/orders/${this.props.id}.json`)
      .then(res=>res.json())
      .then(data=>{
        let containerOrders=[];
        for(let key in data){
          containerOrders.push(data[key]);
        }
        this.setState({loading:false})
        this.setState({orders:containerOrders});
      })
  }
  render(){
    console.log(this.state.orders);
    let result;
    if(!this.state.loading){
      result=   
            <div className={classes.container}>
            <Link to="/"><button className={classes.button}>Go Back</button></Link>
            <ul className={classes.ul}>
                {this.state.orders.map((order,index)=>
                  <Order key={index} 
                        ingredients={order.ingredients} 
                        CustomerInfo={order.CustomerInfo}
                        totalPrice={order.totalPrice}
                  />
                )}
            </ul>
            </div>
    }else{
      result=<div className={classes.loadingContainer}><Loader/></div>
    }
    return(result)
    
  }
}
const mapStateToProps=state=>{
  return{
    id:state.authReducer.id
  }
}
export default connect(mapStateToProps)(TotalOrders);