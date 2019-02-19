import {NavLink,Link} from 'react-router-dom';
import React,{Component} from 'react';
import classes from './Burger.module.scss';

 class burger extends Component {
  link=()=>{
    const {url,name,calories,id,price,description}=this.props;
    const data={url,name,calories,id,price,description};

    this.props.history.push({pathname:`/burger/${this.props.id}`,state:{...data}})
  }
  render(){
      const {url,name,calories,id,price}=this.props;
      return(
        <div className={classes.burger} onClick={this.link} style={{cursor:'pointer'}}>
          <img src={url} className={classes.burgerImage}/>
          <h2 className={classes.burgerName}>{name}</h2>
          <h2 className={classes.calorie}>{calories} <strong>Cal</strong></h2>
          <h3 className={classes.price}>price : {price} tk</h3>
        </div>
      )
  }
 }

export default burger;