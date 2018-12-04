import React,{Component} from 'react';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import Aux from '../../HOC/helper';
import Button from '../../components/UI/Button/Button';
import Loader from '../../components/UI/Loader/Loader';
import ContactData from '../../components/ContactData/ContactData';
class Checkout extends Component{
  state={
    loading:false,
    ingredients:'',
    totalPrice:0,
    message:false,
    contactInfo:'',
    error:false
  }
  componentWillMount(){
    this.setState({ ingredients:this.props.location.state.ingredients,
                    totalPrice:this.props.location.state.totalPrice
                  })
  }
  contactHandler=(data)=>{
    this.setState({contactInfo:data})
  }
  buy=()=>{
    this.setState({loading:true});
    const data={
      ingredients:this.state.ingredients,
      totalPrice:this.state.totalPrice,
      CustomerInfo:this.state.contactInfo
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
    }).then(res=>{this.setState({loading:false,message:true})})
    .catch(err=>{this.setState({loading:false})})

    setTimeout(()=>{
      this.props.history.goBack();
    },4000)
  }
  render(){
 
      if(!this.state.loading){
        return(
          <div style={{marginTop:'-1.4rem',textAlign:'center'}}>
            <h1 style={{textAlign:'center',paddingTop:'2rem'}}>We hope it tastes well!!</h1>
            <BurgerIngredients layers={this.state.ingredients} totalPrice={this.state.totalPrice}/>
            <ContactData contactInfo={this.contactHandler} buy={this.buy}  error={(err)=>this.setState({error:err})}/>
            
            <br/>
            {this.state.message ?
              <p  style={{background:'green',color:'white',display:'inline-block',padding:'5px'}}>
              Sir Your order is successfully sent.We will try to deliver the product as soon as Possible
            </p>
            : null
            }
            {this.state.error && !this.state.message?<p style={{color:'red',fontSize:'1.4rem'}}>Please fill in all fields</p>:null}         
            </div>     
        )
      }else{
        return <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}><Loader/></div>
      }
 
  }

}

export default Checkout;