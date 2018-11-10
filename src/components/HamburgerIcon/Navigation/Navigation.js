import React from 'react';
import classes from './Navigation.module.scss';

const Navigation=(props)=>{
  
  let backgroundName=[];
  let liName=[];
  if(props.show){
    backgroundName.push(classes.show+' '+classes.background);
    liName.push(classes.show+' '+classes.li);
  }else{
    backgroundName.push(classes.background);
    liName.push(classes.li);
  }
  
  return(
    <div className={props.show?backgroundName.join(''):backgroundName.join('')}>
    <ul className={classes.ul_grid}>
        <li className={props.show?liName.join(''):liName.join('')}><a href="./">Home</a></li>
        <li className={props.show?liName.join(''):liName.join('')}><a href="./">About</a></li>
        <li className={props.show?liName.join(''):liName.join('')}><a href="./">Contact</a></li>
        <li className={props.show?liName.join(''):liName.join('')}><a href="./">Profile</a></li>
    </ul>
    </div>
  ) 
}
export default Navigation;