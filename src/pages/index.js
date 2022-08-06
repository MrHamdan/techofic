import Head from 'next/head'
import Image from 'next/image'
import Homepage from '../components/home/Homepage'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div>
        <Head>
          <title>Techofic</title>
          <meta name="description" content="Techofic is a software agency, We offer our customers to Software Development services." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Homepage />
    </div>
  );
}
