import Head from 'next/head';
import Image from 'next/image';
import LandingPage from '../src/components/landingPage';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            {/* <h1 className={styles.title}>Welcome to EPOS Booking Service</h1>
            <h2>The online booking </h2> */}
            <LandingPage />
        </>
    );
}
