import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography sx={{ color: 'info.main', fontWeight: 'bold' }} variant='h5'>
                    {name}
                </Typography>
                <Typography variant='h6'>
                    {time}
                </Typography>
                <Typography variant='caption'>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button variant='contained' >BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
    );
};

export default Booking;