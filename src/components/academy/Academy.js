import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import AcademyBanner from './AcademyBanner';
import Askhere from './Askhere';
import BuildCareer from './BuildCareer';
import Faq from './Faq';
import OurCourses from './OurCourses';
import OurTrainers from './OurTrainers';
import PopularCourses from './PopularCourses';

const Academy = () => {
    return (
      <div>
        <Navbar color="#343434" />
        <AcademyBanner />
        <BuildCareer />
        <OurCourses />
        <PopularCourses />
        <OurTrainers/>
        <Faq/>
        <Askhere/>
        <Footer />
      </div>
    );
};

export default Academy;