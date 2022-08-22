import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <CircularProgress />
    }
    else {
        return user?.email ? children : <Navigate replace to='/login' state={{ from: location }}></Navigate>
    }
};

export default PrivateRoute;