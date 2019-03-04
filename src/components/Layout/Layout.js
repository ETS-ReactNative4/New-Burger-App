import React from 'react';
import {connect} from 'react-redux';
import classes from './Layout.module.scss';
import {firebase} from '../../firebase/firebase';
import {signOut} from '../../store/Actions/auth';
import { withRouter } from "react-router";
import { Scrollbars } from 'react-custom-scrollbars';
const Layout=(props)=>{
  
  return(
     <Scrollbars style={{ width: '100vw', height: '100vh' }} renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#dfe2e2',width:'4',opacity: '0.5'}}/>
      }>
    <div>
      <main>
        {props.children}
      </main>
    </div>
    </Scrollbars>
   
  )

  }

let mapStateToProps=(state)=>{
  return{
    check_signup_link:state.authReducer.check_signup_link
  }
}

export default connect(mapStateToProps)(withRouter(Layout));