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
      this.setState({loading:true,Message:false})
    const data={
      ingredients:this.state.ingredients,
      totalPrice:this.state.totalPrice,
      CustomerInfo:{
        Name:'tanveer',
        Address:'Chandgaon R/A',
        Email:'tanveer@gmail.com',
        Mobile_No:'0171.....'
      }
    };
    fetch('https://testing-bc79f.firebaseio.com/orders.json',{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data),
    }).then(res=>{this.setState({loading:false,purChaseBurger:false})})
    .catch(err=>{this.setState({loading:false,purChaseBurger:false})})
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
          <p className={classes.price}><strong>Total Price: </strong><span className={classes.mainPrice}>{this.state.totalPrice} </span>tk</p>
          <BuildContols add={this.addHandler} remove={this.removeHandler}/>
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