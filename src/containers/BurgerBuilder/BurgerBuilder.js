import React,{Component} from 'react';
import Aux from '../../HOC/helper';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BuildContols from '../../components/BuildControls/BuildContols';
import classes from './BurgerBuilder.module.scss';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Loader from '../../components/UI/Loader/Loader';
 
 const prices={
  'Salad':5,
  'Meat':50,
  'Cheese':40,
  'Chicken':30
 }
 class BurgerBuilder extends Component{
   state={
    ingredients:{
      'Salad':0,
      'Meat':0,
      'Cheese':0,
      'Chicken':0
    },
    totalPrice:10,
    purChaseBurger:false,
    hamBurger:true,
    checkout:false,
    loading:false,
    Message:false
   }

   addHandler=(item)=>{
    
    const currentItemNumber=this.state.ingredients[item];
    const add=currentItemNumber+1;
    const Upgradeingredients={...this.state.ingredients};
    Upgradeingredients[item]=add;
    const currentPrice=this.state.totalPrice;
    const updatePrice=currentPrice+prices[item];
    this.setState({ingredients:Upgradeingredients,totalPrice:updatePrice}); 

   }
   removeHandler=(item)=>{
    let currentItemNumber=this.state.ingredients[item];
    if(currentItemNumber!==0){
      const remove=currentItemNumber-1;
      const Upgradeingredients={...this.state.ingredients};
      Upgradeingredients[item]=remove;
      const currentPrice=this.state.totalPrice;
      const updatePrice=currentPrice-prices[item];
      this.setState({ingredients:Upgradeingredients,totalPrice:updatePrice});
    }else{
      return false;
    }

   }
   purChaseHandler=()=>{   
     this.setState({purChaseBurger:true});   
   }
   closeModal=()=>{
    this.setState({purChaseBurger:false});
   }
   buy=()=>{
     if(this.state.totalPrice!==10){
      this.props.history.push({pathname:'/checkout',state:{
        ingredients:this.state.ingredients,
        totalPrice:this.state.totalPrice
        }}
      );

     }else{  
      this.setState({Message:true});
      this.setState({loading:true});
      setTimeout(()=>{
        this.setState({loading:false,Message:false});
      },2000)
 
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
        orderSummary=<h3>Please add the ingrdients in your burger..</h3>
        
      }else{
        orderSummary=<Loader />
      }
     
    }else{
      
      orderSummary= <OrderSummary requestOrder={this.state.purChaseBurger} ingredients={this.state.ingredients} closeModal={this.closeModal} buy={this.buy}
      totalPrice={this.state.totalPrice}
      />
    }

    return(
      <Aux>
        <BurgerIngredients layers={this.state.ingredients} totalPrice={this.state.totalPrice}/>
        <div className={classes.BuildContolsContainer}>
          <p className={classes.price} ><strong>Total Price: </strong><span className={classes.mainPrice}>{this.state.totalPrice} </span>tk</p>
          <BuildContols add={this.addHandler} remove={this.removeHandler} />
          <Modal requestOrder={this.state.purChaseBurger} closeModal={this.closeModal}>
            {orderSummary}
          </Modal>
          <button className={classes.orderBtn} onClick={this.purChaseHandler}>Order</button>
        </div>
      </Aux>
    )
  }
}
export default BurgerBuilder;