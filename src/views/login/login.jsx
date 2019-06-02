import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import API from '../../helpers/api'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

const Login = (props) => {
    const [email, setEmail] = useState();
    const [appName] = useState('E-Code Learning');
    const [password, setPassword] = useState();
    const [loginResponse, setLoginResponse] = useState();


    const performLogin = (e) => {
        let data = {
            emailId: email,
            password: password
        }
        storeEmail()
        API.loginUser(data, setLoginResponse)
        props.setLogout(true)
    }

    const viewHandler = (e) => {
        switch (e.target.id) {
            case 'loginEmail':
                setEmail(e.target.value)
                break;
            case 'loginPassword':
                setPassword(e.target.value)
                break;
            default:

        }
    }

    function storeEmail(    ){
        window.localStorage.setItem('email', email)
    }

    let content = (
        (loginResponse ? <Redirect to='/home' email={email} /> :
            <div className="Login">
                <Card className="LoginCard">
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography style={{ textAlign: 'center' }}>{appName}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth id="loginEmail" label="Email" type="email" margin="normal" onChange={viewHandler} variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth id="loginPassword" label="Password" type="password" margin="normal" onChange={viewHandler} variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button onClick={() => { performLogin() }} fullWidth variant="contained" color="primary">
                                    Login
                            </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography style={{ textAlign: 'center' }}>
                                    <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: '/register' }}>Create your account here.</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div >)
    )

    return content;
}

export default Login;