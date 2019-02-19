import classes from './AddToCart.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AddToCart=(props)=>{
  return(
    <div className={classes.myMeal}>
      <p>{props.totalItems} times added in my meals    <FontAwesomeIcon
          icon={['fas','angle-down']}
          transform="right-5 grow-2.5 down-2"
      /></p>
    </div>
  )
}
export default AddToCart;