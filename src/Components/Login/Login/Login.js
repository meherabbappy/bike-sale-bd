import { Container, Grid, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

import login from '../../../images/bike5.jpg'
import useAuth from './../../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, logInUser, isLoading, signInUsingGoogle, authError } = useAuth()

    const location = useLocation()
    const history = useHistory()


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }
    return (
        <Container sx={{ mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ fontSize: "30px", fontWeight: "bold" }} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Email"
                            type="email"
                            variant="standard"
                            name="email"
                            onChange={handleOnChange}
                        />
                        <TextField sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Password"
                            type="password"
                            variant="standard"
                            name="password"
                            onChange={handleOnChange}
                        />
                        <Button className="bbbb" sx={{ width: "75%", m: 1 }} variant='contained' type="submit"> Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none', color: "black" }}
                            to='/register'>
                            <Button sx={{ color: "red" }} variant="text">New user? Please Register</Button>
                        </NavLink>
                    </form>

                    <p>__________________________</p>
                    <Button className="bbbb" onClick={handleGoogleSignIn} variant="contained" sx={{ bgcolor: "black" }}>Google SignIn</Button>

                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Login Successfully!!!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;