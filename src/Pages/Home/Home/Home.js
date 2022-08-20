import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppointmentBanner/AppoinmentBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Services />
            <AppoinmentBanner />
        </div>
    );
};

export default Home;