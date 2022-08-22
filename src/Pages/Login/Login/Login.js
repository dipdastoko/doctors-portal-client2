import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant='body1'>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            onBlur={handleOnChange}
                            variant="standard" /> <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type='password'
                            label="Your Password"
                            name='password'
                            onBlur={handleOnChange}
                            variant="standard" />
                        <Button variant='contained' type='submit' sx={{ width: '75%', m: 1 }}>Login</Button>
                        <Link to='/register' style={{ textDecoration: 'none' }}><Button variant='text'>New User? Please Register</Button></Link>
                    </form>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Login Successfully</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>

                    }
                    <Button onClick={handleGoogleSignIn} variant='text'>Google Signin</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;