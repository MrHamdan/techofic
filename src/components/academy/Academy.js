import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import AcademyBanner from './AcademyBanner';
import BuildCareer from './BuildCareer';
import OurCourses from './OurCourses';
import PopularCourses from './PopularCourses';

const Academy = () => {
    return (
      <div>
        <Navbar color="#343434" />
        <AcademyBanner />
        <BuildCareer />
        <OurCourses />
        <PopularCourses />
        <Footer />
      </div>
    );
};

export default Academy;