import React from 'react';
import Button from '@mui/material/Button';
import { ServiceName } from './style';
import Link from 'next/link'
const LandingPage = () => {
    return (
        <div
            style={{
                backgroundImage:
                    'url("/images/background.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                textAlign: 'center',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                alignItems: 'center',
                width: '100%',
                height: '100%',

                margin: '0px'

            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '0px',
                    width: '700px',
                    // margin: '0px',
                    fontSize: '44px',
                    fontWeight: 'bold'
                }}
            >
                <div style={{ marginRight: '10px' }}>Welcome to </div>
                <ServiceName>EPOS Booking Service</ServiceName>
            </div>
            <p style={{fontSize: '25px'}}>The online booking assistant to fill your schedule</p>
            <Link href='/search' passHref>
                <Button variant="contained" style={{ width: '350px' }}>
                    checkout our registered partners
                </Button>
            </Link>

        </div>
    );
};

export default LandingPage;
