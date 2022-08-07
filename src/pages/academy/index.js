import React from 'react';
import Academy from '../../components/academy/Academy';
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>Academy-Techofic</title>
      </Head>
      <Academy />
    </div>
  );
};

export default index;