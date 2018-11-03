import React from 'react';
import classes from './BuildControl.module.scss';

const BuildControl=(props)=>{
  const itemName=[];
  itemName.push(classes['text']);
  itemName.push(classes[props.label]);
 
  return(
    <div className={classes.BuildControlContainer}>
      <div className={itemName.join(' ')}>{props.label}</div>
      <button onClick={()=>props.add(props.label)} className={classes.add}>More</button>
      <button onClick={()=>props.remove(props.label)} className={classes.remove}>Less</button>
    </div> 
  )
  
};
export default BuildControl;