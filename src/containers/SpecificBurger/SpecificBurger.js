import React, { Component } from 'react'
import {connect} from 'react-redux';
import classes from './SpecificBurger.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddToCart from '../../components/AddToCart/AddToCart';

class SpecificBurger extends Component {
  state={
    name:'',
    price:'',
    calories:'',
    description:'',
    url:'',
    plusSign:false
  }

  componentWillMount=()=>{
      const {name,price,calories,description,url}=this.props.history.location.state;
      this.setState({name,price,calories,description,url});
  }
  addToCart=(name)=>{
    this.props.dispatch({type:'ADD ITEM TO CART',name:name})
    this.props.dispatch({type:'ADDED TO CART ITEMS INFO'})
    this.setState({plusSign:true});
    setTimeout(()=>{
      this.setState({plusSign:false});
    },300)
  }
  removeFromCart=(name)=>{
    this.props.dispatch({type:'REMOVE ITEM FROM CART',name:name})
    this.props.dispatch({type:'ADDED TO CART ITEMS INFO'})
  }
  render() {
    let sign;
    if(this.state.plusSign){
      sign='check'
    }else{
      sign='plus-circle'
    }
    const {name,price,calories,description,url}=this.state;
    return (
      <div>
       <AddToCart totalItems={this.props.totalItemsInTheCart}/>
        <div className={classes.container}>
          <div className={classes.info}>
            <h1 className={classes.title}>{name}</h1>
            <h3 className={classes.subTitle}>{description}</h3>
            <h3 className={classes.calories}>{calories} cal</h3>
            {
              Object.keys(this.props.priceList).length > 0 ?
              <button className={classes.btn} onClick={()=>this.addToCart(name)}>Add to my Meal
                <FontAwesomeIcon
                  icon={['fas',sign]}
                  transform="right-5 grow-2.5"
                />
              </button> : null
            }
         
          </div>
          <div className={classes.imgContainer}>
            <img src={url} className={classes.img}></img>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state,props)=>{
  let itm=state.adminReducer.allBurgers.find(itm=>props.match.params.id==itm.id);
  return{
    all_burgers:state.adminReducer.allBurgers,
    speceficItem:itm,
    totalItemsInTheCart:state.adminReducer.totalItemsInTheCart,
    priceList:state.adminReducer.price
  }
}
export default connect(mapStateToProps)(SpecificBurger);
