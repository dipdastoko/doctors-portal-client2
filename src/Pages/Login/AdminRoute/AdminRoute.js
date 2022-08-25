import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, isLoading, admin } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <CircularProgress />
    }
    else {
        return user?.email && admin ? children : <Navigate replace to='/' state={{ from: location }}></Navigate>
    }
};

export default AdminRoute;