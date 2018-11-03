import React from 'react';
import NavigationItems from './NavagationItems/NavigationItems';
import classes from './HamburgerMenu.module.scss';

const HamburgerMenu=(props)=>{
  let itemName;
  console.log(props.show);
  if(props.show){
   
    itemName='show' + ' ' + classes.background;
    console.log(itemName);
  }
  return(
    <div className={!props.show?classes.background :classes.show}>
      <ul className={classes.ul_grid}>
        <li ><a href="">Home</a></li>
        <li ><a href="">About</a></li>
        <li ><a href="">Contact</a></li>
        <li ><a href="">Profile</a></li>
      </ul>
    </div>
  ) 
}
export default HamburgerMenu;

