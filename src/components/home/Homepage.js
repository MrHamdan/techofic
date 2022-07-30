import React from 'react';
import Footer from '../shared/Footer';
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
            <Navbar color='#1d1d1d'/>
            <Banner/>
            <Service/>
            <OurServices/>
            <Solutions/>
            <WhyChoose/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Homepage;