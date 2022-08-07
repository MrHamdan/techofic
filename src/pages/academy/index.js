import React from 'react';
import Academy from '../../components/academy/Academy';
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>Academy-Techofic</title>
        <meta name="description" content="Techofic is a software agency, We offer our customers to Software Development services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Academy />
    </div>
  );
};

export default index;