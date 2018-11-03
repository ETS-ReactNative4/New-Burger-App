import React from 'react';
import { prependOnceListener } from 'cluster';


const NavigationItem=(props)=>{
  return(
    <li className={props.cName}><a href={props.link}>{props.itemName}</a></li>
  ) 
}
export default NavigationItem;