import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Box, Container } from '@mui/system';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 100,
    backgroundColor: 'rgba(22, 101, 97,0.9)',
    backgroundBlendMode: 'darken,luminosity'
}

const AppoinmentBanner = () => {
    return (
        <Container style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -100 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: '#29AFAB' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, iste optio doloribus tenetur quaerat accusamus alias ipsa expedita fugit eos.
                        </Typography>
                        <Button variant='contained'>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentBanner;