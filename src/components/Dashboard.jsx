import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import "../styles/dashboard.css";
import firebase from '../firebase';
import { useHistory } from 'react-router-dom'

const Dashboard = () => {

    const auth = firebase.auth();

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged( user => {
            if(user === null){
                if(history !== null){
                    history.push('/login')
                }
            }
        })
    }, [auth, history])

    const signout = () => {
        auth.signOut()
            .then(() => {
                console.log("Logged Out!")
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="auth_container">
            <div>
                <h1>Welcome To The Other Side</h1>
                <Button variant="outlined" onClick={signout}>Sign Out</Button>
            </div>
        </div>
    );
}

export default Dashboard;