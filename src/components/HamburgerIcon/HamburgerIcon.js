import React,{Component} from 'react';
import Aux from '../../HOC/helper';
import classes from './HamburgerIcon.module.scss';
import Navigation from './Navigation/Navigation';

class  HamburgerIcon extends Component{

  state={
    hamBurger:false
   }

   hamBurgerController=()=>{
    this.setState((prevState)=>{
      return {hamBurger:!prevState.hamBurger}
    });
   }

  render(){
    let itemName=[];
    
    if(this.state.hamBurger){
      itemName.push(classes.menu_btn +' '+ classes.close);
    }else{
      itemName.push(classes.menu_btn);   
    }
    return(
      <Aux>
        <div className={this.state.hamBurger?itemName.join(''):itemName.join('')} onClick={this.hamBurgerController}>
          <span className={!this.state.hamBurger?null:'a'}>&nbsp;</span>
          <span >&nbsp;</span>
          <span >&nbsp;</span>
        </div>
        <Navigation show={this.state.hamBurger}/>
      </Aux>
    )
  }

};

export default HamburgerIcon;