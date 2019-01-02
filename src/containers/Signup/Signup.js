import React, { Component } from 'react';
import classes from './Signup.module.scss';
import {firebase,googleProvider,fbProvider,database} from '../../firebase/firebase';
import {connect} from 'react-redux';
import {signIn,signOut} from '../../store/Actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Signup extends Component {
  state={
    inputShow:false,
    email:'',
    password:''
  }
  emailHandler=(e)=>{
    let currentValue=this.state.inputShow;
    this.setState({inputShow:!currentValue});
    e.preventDefault();
  }
  googleSignInHandler=()=>{
    firebase.auth().signInWithPopup(googleProvider).then(()=>{
      this.props.dispatch({type:'SIGN_IN_WITH_EMAIL'});
    });;
  }
  fbSignInHandler=()=>{
    firebase.auth().signInWithPopup(fbProvider).then(()=>{
      this.props.dispatch({type:'SIGN_IN_WITH_EMAIL'});
    });;
   
  }
  emailChangeHandler=(e)=>{
    this.setState({email:e.target.value})
  }
  passwordChangeHandler=(e)=>{
    this.setState({password:e.target.value})
  }
  emailAndPasswordHandler=(email,password)=>{
    console.log(email,password);
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
      this.props.dispatch(signOut()); 
      this.props.dispatch({type:'SIGN_UP_WITH_EMAIL'});
      this.props.history.push("/");
    });
  }
  render() {
    let fbBtn=[classes.button,classes.facebook];
    let googleBtn=[classes.button,classes.google];
    return (
      <div className={classes.container}>
        <button className={googleBtn.join(' ')} onClick={this.googleSignInHandler}>
          <FontAwesomeIcon
              icon={['fab','google']}
              className={classes.google_icon}
            />
            <span className={classes.textGoogle}>Log In With Google</span>
        </button>
        <button className={fbBtn.join(' ')} onClick={this.fbSignInHandler}>
          <FontAwesomeIcon
              icon={['fab','facebook']}
              className={classes.fb_icon}
            />
            <span className={classes.textFacebook}>Log In With Facebook</span>
        </button>
        <h3 className={classes.or}>Or</h3>
        <button onClick={this.emailHandler} className={classes.emailHandler}>Sign Up with Email</button>
          {
            this.state.inputShow ?
              <div>
                <div className={classes.inputContainer}>  
                  <input 
                    placeholder="Email"
                    type="email"
                    onChange={this.emailChangeHandler}
                  />
                   <label>Email</label>     
                </div>
                <div className={classes.inputContainer}>     
                  <input 
                    placeholder="Password"
                    type="password"
                    onChange={this.passwordChangeHandler}  
                  /> 
                  <label>Password</label> 
                </div>
                <button onClick={()=>this.emailAndPasswordHandler(this.state.email,this.state.password)} className={classes.signUpBtn}>Submit</button>
              </div>    
              : null
          }

      </div>
    )
  }
}

export default connect()(Signup);