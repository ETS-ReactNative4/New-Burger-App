import React, {Component} from 'react'
import classes from './Order.module.scss';
import moment from 'moment';
import cancelOrder from '../../../store/Actions/cancel_order';
import {connect} from 'react-redux';
class Order extends Component {

  render(){
    console.log(this.props)
    let height;
    this.props.cancelOrderTime>moment().valueOf()?height='20rem':height='inherit';
    let UID=this.props.UID;
    let id=this.props.id;
    return(
      <li className={classes.li}>
        <div style={{position:'relative',height:`${height}`}}>
          <h3>Chicken: {this.props.ingredients.Chicken}</h3>
          <h3>Cheese: {this.props.ingredients.Cheese}</h3>
          <h3>Meat: {this.props.ingredients.Meat}</h3>
          <h3>Salad: {this.props.ingredients.Salad}</h3>
          <h2 style={{color:'white'}}>Total Price: {this.props.totalPrice}</h2>
          {this.props.cancelOrderTime>moment().valueOf()?
          <div style={{position:'absolute',padding:'0px',marginTop:'2rem',color:'red',bottom:'.2rem'}}>
          <h3 style={{display:'inlineBlock',background:'red',color:'white',fontWeight:'300'}}>
          You can cancel your order before
            {
                moment(this.props.cancelOrderTime)
                .format('hh:mm:ss')
            }
          </h3>
          <button className={classes.cancelBtn}
          onClick={()=>this.props.dispatch(cancelOrder(UID,id))}>Cancel Order</button>
          </div>
          :null
          }
        </div>
        <div style={{whiteSpace:'nowrap'}}>
        <h3>Name: {this.props.CustomerInfo.name}</h3>
          <h3>Email: {this.props.CustomerInfo.email}</h3>
          <h3>Address: {this.props.CustomerInfo.address}</h3>
          <h3>Mobile: {this.props.CustomerInfo.mobile}</h3>
          <h3 style={{background:'white',padding:'5px',color:'black'}}>Order Time:{moment(this.props.orderTime).calendar()}</h3>
        </div>         
      </li>

)
  }
}
const mapStateToProps=state=>{
  return{
    UID:state.authReducer.id
  }
}
export default connect(mapStateToProps)(Order);
// const Order=(props)=>{
//   function convertSecond(time){
//     let hourToSecond=Number(time.toString().split(':')[0])*60*60;
//     let minuteToSecond=Number(time.toString().split(':')[1])*60;
//     let second=Number(time.toString().split(':')[2]);
  
//     let totalSecond=hourToSecond+minuteToSecond+second;
//     return totalSecond;
//   }
  
//   var startTime=moment(props.orderTime).format('hh:mm:ss');
//   const timetovalue=moment(props.orderTime).valueOf();
//   var endTime = moment(timetovalue)
//       .add(5, 'minutes')
//       .format('hh:mm:ss');
  
//   const start=convertSecond(startTime);
//   const end=convertSecond(endTime);
  
//   function count(time){
//     let convertSeconds=time*60;
//     let repeat=setInterval(()=>{
//     convertSeconds--;
//     let min=Math.floor(convertSeconds/60);
//     let second=convertSeconds%60;
//     if(min==0 & second==0){
//       clearInterval(repeat)
//     }
//     console.log({min,second});
//     return{min,second}
//     },1000)
//   }
//   let c=count((end-start)/60);


//   return(
  
//         <li className={classes.li}>
//           <div>
//             <h3>Chicken: {props.ingredients.Chicken}</h3>
//             <h3>Cheese: {props.ingredients.Cheese}</h3>
//             <h3>Meat: {props.ingredients.Meat}</h3>
//             <h3>Salad: {props.ingredients.Salad}</h3>
//             <h2 style={{color:'white'}}>Total Price: {props.totalPrice}</h2>
//             <h3 style={{background:'red',padding:'5px',color:'white'}}>{}</h3>
//           </div>
//           <div>
//           <h3>Name: {props.CustomerInfo.name}</h3>
//             <h3>Email: {props.CustomerInfo.email}</h3>
//             <h3>Address: {props.CustomerInfo.address}</h3>
//             <h3>Mobile: {props.CustomerInfo.mobile}</h3>
//             <h3 style={{background:'white',padding:'5px',color:'black'}}>Order Time:{moment(props.orderTime).calendar()}</h3>
//           </div>         
//         </li>

//   )
// }


