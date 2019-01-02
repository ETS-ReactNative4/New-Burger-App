import React,{Component} from 'react';
import Aux from '../../HOC/helper';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BuildContols from '../../components/BuildControls/BuildContols';
import classes from './BurgerBuilder.module.scss';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Loader from '../../components/UI/Loader/Loader';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

 class BurgerBuilder extends Component{
   state={
    purChaseBurger:false,
    hamBurger:true,
    checkout:false,
    loading:false,
    Message:false,
    signInMessage:false
   }
   
   purChaseHandler=()=>{   
     this.setState({purChaseBurger:true});   
   }
   closeModal=()=>{
    this.setState({purChaseBurger:false});
   }
   buy=()=>{
     if(!!this.props.id){
      if(this.props.totalPrice!==10){
        this.props.history.push({pathname:'/checkout',state:{
          ingredients:this.props.ingredients,
          totalPrice:this.props.totalPrice
          }}
        );
  
       }else{  
        this.setState({Message:true});
        this.setState({loading:true});
        setTimeout(()=>{
          this.setState({loading:false,Message:false});
        },2000)
       }
     }else{
      this.props.history.push('/signin');
     }
  
   }
   hamBurgerController=()=>{
    this.setState((prevState)=>{
      return {hamBurger:!prevState.hamBurger}
    });
   }


  render(){
   
    let orderSummary;
    if(this.state.loading){
      if(this.state.Message){
        orderSummary=<div style={{height:'33rem'}}><h3>Please add the ingrdients in your burger..</h3></div>
        
      }else{
        orderSummary=<Loader />
      }
     
    }else{
      
      orderSummary= <OrderSummary requestOrder={this.state.purChaseBurger} ingredients={this.props.ingredients} closeModal={this.closeModal} buy={this.buy}
      totalPrice={this.props.totalPrice}
      />
    }

    return(
      <Aux>
        
        {this.props.check_signup_link
          ?
            <Aux>
              <Link to="signup"><button className={classes.signupButton}>Sign Up</button></Link>
              <Link to="signin"><button className={classes.signinButton}>Sign In</button></Link>
            </Aux>    
          :
            <Link to="orders"><button className={classes.button}>Orders</button></Link> 
          }
        
        
        <BurgerIngredients layers={this.props.ingredients} totalPrice={this.props.totalPrice}/>
        <div className={classes.BuildContolsContainer}>
          <p className={classes.price} ><strong>Total Price: </strong><span className={classes.mainPrice}>{this.props.totalPrice} </span>tk</p>
          <BuildContols />
          <Modal requestOrder={this.state.purChaseBurger} closeModal={this.closeModal}>
            {orderSummary}
          </Modal>
          <button className={classes.orderBtn} onClick={this.purChaseHandler}>Order</button>
        </div>
      </Aux>
    )
  }
}
const mapStateToProps=state=>{
  return{
    ingredients:state.burgerReducer.ingredients,
    totalPrice:state.burgerReducer.totalPrice,
    check_signup_link:state.authReducer.check_signup_link,
    id:state.authReducer.id
  }
}
export default connect(mapStateToProps)(BurgerBuilder);