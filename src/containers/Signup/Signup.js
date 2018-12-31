import React, { Component } from 'react';
import classes from './Signup.module.scss';
import {firebase,googleProvider,fbProvider} from '../../firebase/firebase';
import {connect} from 'react-redux';
import {signIn,signOut} from '../../store/Actions/auth';


class Signup extends Component {
  state={
    inputShow:false
  }
  emailHandler=(e)=>{
    this.setState({inputShow:true});
    e.preventDefault();
  }
  googleSignInHandler=()=>{
    firebase.auth().signInWithPopup(googleProvider).then((user)=>{
      this.props.dispatch(signIn(user.user.uid)); 
    });
  }
  fbSignInHandler=()=>{
    firebase.auth().signInWithPopup(fbProvider);
  }
  googleSignOutHandler=()=>{
    firebase.auth().signOut().then(()=>{
      this.props.dispatch(signOut());
    })
  }
  fbSignOutHandler=()=>{
    firebase.auth().signOut();
  }
  render() {
   
    return (
      <div className={classes.container}>
        <button onClick={this.googleSignInHandler}>Sign Up With Google</button>
        <button onClick={this.googleSignOutHandler}>Log Out GOOGLE</button>
        <button onClick={this.fbSignInHandler}>Register With Facebook</button>
        <button onClick={this.fbSignOutHandler}>Log Out from FB</button>
        <p>Or,</p>
        <button onClick={this.emailHandler}>Sign Up with Email</button>
          {
            this.state.inputShow ?
              <div>
                <div>
                  <label>Email</label>    
                  <input 
                    placeholder="Email"
                    type="text"
                    // onChange={this.emailChangeHandler}
                  />
                  
                </div>
                <div>
                  <label>Mobile</label>     
                  <input 
                    placeholder="Mobile"
                    type="text"
                    // onChange={this.mobileChangeHandler}  
                  /> 
                </div>
                <button>Sign Up</button>
              </div>    
              : null
          }

      </div>
    )
  }
}

export default connect()(Signup);