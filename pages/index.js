import Head from 'next/head';
import Image from 'next/image';
import LandingPage from '../src/components/landingPage';
import RegisteredPartners from '../src/components/registedPartners';

export default function Home() {
    return (
        <>
            <LandingPage />
            <RegisteredPartners />
        </>
    );
}
