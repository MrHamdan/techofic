import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import BootcampRegistration from './BootcampRegistration';

const Bootcamp = () => {
    return (
      <div>
        <Navbar color="#323232" />
        <BootcampRegistration />
        <Footer />
      </div>
    );
};

export default Bootcamp;