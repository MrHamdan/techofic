
import React, { useState } from 'react';
import Bootcamp from '../../../components/bootcamp/Bootcamp';
import Head from 'next/head'


const Index = () => {
   
    return (
          <div>
          <Head>
            <title>Bootcamp-Techofic</title>
          </Head>
          <Bootcamp />
      </div>
    );
};

export default Index;