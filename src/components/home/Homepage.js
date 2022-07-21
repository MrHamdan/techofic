import React from 'react';
import Navbar from '../shared/Navbar';
import Banner from './Banner';
import Contact from './Contact';
import OurServices from './OurServices';
import Service from './Service';
import Solutions from './Solutions';
import WhyChoose from './WhyChoose';

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Service/>
            <OurServices/>
            <Solutions/>
            <WhyChoose/>
            <Contact/>
        </div>
    );
};

export default Homepage;