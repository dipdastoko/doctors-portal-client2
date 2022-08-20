import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box, Container } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores necessitatibus, rem quam tempora dolorem deserunt doloremque assumenda deleniti temporibus ratione!
                        </Typography>
                        <Button variant='contained'>Get Appointment </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: 400 }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;