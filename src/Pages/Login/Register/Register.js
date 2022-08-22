import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not mathch');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant='body1'>Registration</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
                            onChange={handleOnChange}
                            variant="standard" /> <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type='password'
                            label="Your Password"
                            name='password'
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type='password'
                            label="Re-Enter Password"
                            name='password2'
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button variant='contained' type='submit' sx={{ width: '75%', m: 1 }}>Register</Button>
                        <Link to='/login' style={{ textDecoration: 'none' }}><Button variant='text'>Already Registered? Please Login</Button></Link>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Created Successfully</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>

                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;