import React from 'react';
import classes from './NavigationItems.module.scss';

const NavigationItems=()=>{
  return(
    <ul className={classes.ul_grid}>
        <li className={classes.li}><a href="">Home</a></li>
        <li className={classes.li}><a href="">About</a></li>
        <li className={classes.li}><a href="">Contact</a></li>
        <li className={classes.li}><a href="">Profile</a></li>
    </ul>
  ) 
}
export default NavigationItems;