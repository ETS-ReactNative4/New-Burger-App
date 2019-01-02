import React from 'react';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import {connect} from 'react-redux';
import classes from './Layout.module.scss';
import {firebase} from '../../firebase/firebase';
import {signOut} from '../../store/Actions/auth';
import { withRouter } from "react-router";
const Layout=(props)=>{
  
  return(
    <div>
      <HamburgerIcon />
      {props.check_signup_link?null:<button onClick={()=>{
          firebase.auth().signOut().then(()=>{
          props.dispatch(signOut()); 
          props.dispatch({type:'SIGN_UP_WITH_EMAIL'});
          props.history.push('/');
      })
      }}
      className={classes.logout}
      >Log Out</button>}
      <main>
        {props.children}
      </main>
    </div>
  )

  }

let mapStateToProps=(state)=>{
  return{
    check_signup_link:state.authReducer.check_signup_link
  }
}

export default connect(mapStateToProps)(withRouter(Layout));