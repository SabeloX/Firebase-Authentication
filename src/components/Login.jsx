import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import "../styles/auth.css";
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { useHistory} from 'react-router-dom';

const Login = () => {

    const auth = firebase.auth();
    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                history && history.push('/');
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const googleSignin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider)
          .then(res => {
              console.log(res.user);
          })
          .catch(err => {
              console.log(err.message);
          });
  }

    return (
        <div className="auth_container">
            <div>
                <form onSubmit={login}>
                    <h2>Login</h2>
                    <TextField onClick={(e) => setEmail(e.target.value)} placeholder='Enter Email Address' type='email' variant="filled" /><br/>
                    <TextField onClick={(e) => setPassword(e.target.value)} placeholder='Enter Passwod' type='password' variant="filled" /><br/>
                    <Button variant="contained" type='submit'>Submit</Button>
                </form>
                <div>
                    <p>Don't Have AN Account? <Link to="/register">Register</Link></p>
                    <p>Or Sign-In with your Google Account</p>
                    <Button type='button' variant="contained" color="primary" onClick={googleSignin}>Google Sign-In</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;