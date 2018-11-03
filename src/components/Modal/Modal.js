import React from 'react';
import classes from './Modal.module.scss';
import Aux from '../../HOC/helper';
import Backdrop from '../UI/Backdrop/Backdrop';
const Modal=(props)=>{
  return(
    <Aux>
    <Backdrop show={props.requestOrder} closeModal={props.closeModal}/>
    {props.requestOrder?    
    <div className={props.requestOrder? classes.Modal: null}>
      {props.children}
    </div>:null }
    </Aux>
  )
}
export default Modal;