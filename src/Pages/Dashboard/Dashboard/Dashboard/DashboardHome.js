import { Grid } from '@mui/material';
import React from 'react';
import Calendar from '../../../Shared/Calendar/Calendar';
import Appointments from '../../Appointments/Appointments';


const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} >
                <Calendar
                    date={date}
                    setDate={setDate}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Appointments date={date} />
            </Grid>

        </Grid>
    );
};

export default DashboardHome;