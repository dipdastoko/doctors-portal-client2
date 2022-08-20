import { Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Container } from '@mui/system';

const appointmentBg = {
    background: `url(${bg})`
}

const AppoinmentBanner = () => {
    return (
        <Container style={appointmentBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h6'>
                        Appointment
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentBanner;