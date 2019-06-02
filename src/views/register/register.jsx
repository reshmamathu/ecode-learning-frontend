import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Toast from '../../components/toast'
import API from '../../helpers/api'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextHelper from '../../helpers/Texthelper'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import _ from 'underscore'

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [registerResponse, setRegisterResponse] = useState('DUMMY');
    const viewHandler = (e) => {
        switch (e.target.id) {
            case 'loginFName':
                setFName(e.target.value)
                break;
            case 'loginLName':
                setLName(e.target.value)
                break;
            case 'loginNumber':
                setNumber(e.target.value)
                break;
            case 'loginEmail':
                setEmail(e.target.value)
                break;
            case 'loginPassword':
                setPassword(e.target.value)
                break;
            default:
        }
    }

    useEffect(() => {
        if (registerResponse === 'DUMMY') return null;
        if (registerResponse)
            Toast(TextHelper.sentenceCase("Welcome! " + fname + " to our Project"))
        else
            Toast("Register Failed")
    }, [registerResponse])

    const registerUser = (e) => {
        if (_.isEmpty(email)) return Toast("Email Empty");
        if (_.isEmpty(fname)) return Toast("First Name Empty");
        if (_.isEmpty(lname)) return Toast("Last Name Empty");
        if (_.isEmpty(number)) return Toast("Number Empty");
        if (_.isEmpty(password)) return Toast("Password Empty");
        let data = {
            first_name: fname,
            last_name: lname,
            emailId: email,
            phoneNumber: number,
            password: password
        }
        API.register(data, setRegisterResponse);
    }

    let content = (
        <div className="Register">
            <Card className="LoginCard">
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField fullWidth id="loginFName" label="First Name" type="email" value={fname} onChange={viewHandler} margin="normal" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="loginLName" label="Last Name" type="email" value={lname} onChange={viewHandler} margin="normal" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="loginNumber" label="Mobile Number" type="number" value={number} onChange={viewHandler} margin="normal" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="loginEmail" label="Email" type="email" value={email} onChange={viewHandler} margin="normal" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="loginPassword" label="Password" type="password" value={password} onChange={viewHandler} margin="normal" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth onClick={() => {
                                window.location.pathname = 'login'
                            }} variant="contained" color="primary">
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={() => { registerUser() }} fullWidth variant="contained" color="primary">
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )

    return content;
}

export default Register;