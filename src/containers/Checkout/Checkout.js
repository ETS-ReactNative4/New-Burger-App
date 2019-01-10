import React,{Component} from 'react';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import Loader from '../../components/UI/Loader/Loader';
import ContactData from '../../components/ContactData/ContactData';
import {connect} from 'react-redux';
import initalState from '../../store/Actions/InitialState';
import pic from '../../pic/1.jpeg';
import classes from './Checkout.module.scss';
import {Link} from 'react-router-dom';
import {database} from '../../firebase/firebase';
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
    console.log(this.props.location);
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
    if(!!this.props.id){
      let id=this.props.id;
    }
    database.ref(`orders/${this.props.id}`).push(data).then(res=>{this.setState({loading:false,message:true})})
    .catch(err=>{this.setState({loading:false})})
    // fetch(`https://testing-bc79f.firebaseio.com/orders/${this.props.id}.json`,{
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     mode: "cors", // no-cors, cors, *same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //         "Content-Type": "application/json; charset=utf-8",
    //         // "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     redirect: "follow", // manual, *follow, error
    //     referrer: "no-referrer", // no-referrer, *client
    //     body: JSON.stringify(data),
    // }).then(res=>{this.setState({loading:false,message:true})})
    // .catch(err=>{this.setState({loading:false})})

    setTimeout(()=>{
      this.props.history.goBack();
      this.props.dispatch(initalState())
    },4000)
  }
  render(){
      console.log(this.props);
      if(!this.state.loading){
        return(
          <div style={{textAlign:'center'}} >
            <Link to="/"><button className={classes.button}>Go Back</button></Link>
            <h1 style={{textAlign:'center',paddingTop:'2rem',color:'rgb(70, 12, 124)'}}>We hope it tastes well!!</h1>
            <BurgerIngredients layers={this.state.ingredients} totalPrice={this.state.totalPrice}/>
            <ContactData contactInfo={this.contactHandler} buy={this.buy}  error={(err)=>this.setState({error:err})}/>
            
            <br/>
            {this.state.message ?
              <p  style={{background:'#c9f658',color:'#36622b',display:'inline-block',padding:'10px'}}>
              Sir Your order is successfully sent.We will try to deliver the product as soon as Possible
            </p>
            : null
            }
            {this.state.error && !this.state.message?<p style={{background:'red',display:'inline-block',color:'white',fontSize:'1.4rem',padding:'10px',borderRadius:'5px'}}>Please fill in all fields</p>:null}         
            </div>     
        )
      }else{
        return <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}><Loader/></div>
      }
 
  }

}
const mapStateToProps=state=>{
  return{
    ingredients:state.burgerReducer.ingredients,
    totalPrice:state.burgerReducer.totalPrice,
    id:state.authReducer.id
  }
}

export default connect(mapStateToProps)(Checkout);