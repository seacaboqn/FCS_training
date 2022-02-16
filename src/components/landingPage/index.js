import React from 'react';
import Button from '@mui/material/Button';
import {
    ServiceName,
    LandingPageWrapper,
    Grettings,
    Background,
    Description,
    WrappedContainer
} from './style';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
const LandingPage = () => {
    const router = useRouter();
    const switchHandler = () => {
        router.push('/#section-2');
    };
    return (
        <>
            <WrappedContainer id="section-1" maxWidth={false}>
                <LandingPageWrapper>
                    <Grettings variant="h2" component="h1">
                        Welcome to{' '}
                        <ServiceName>EPOS Booking Service</ServiceName>
                    </Grettings>
                    <Description variant="h5" component="h5">
                        {' '}
                        The online booking assistant to fill your schedule
                    </Description>
                    <Button
                        variant="contained"
                        style={{ width: '350px' }}
                        onClick={switchHandler}
                    >
                        checkout our registered partners
                    </Button>
                </LandingPageWrapper>
            </WrappedContainer>

            <Background>
                <svg
                    xmls="http://www.w3.org/2000/svg"
                    viewBox="0 0 1903 556"
                    style={{
                        x: '0px',
                        y: '0px'
                    }}
                >
                    <path
                        fill="#525c69"
                        d="M753.1,434.2c110.6,63.7,277.7,70.6,373.4,15.4L1905,0v555.9H0V0.2L753.1,434.2z"
                    ></path>
                </svg>
            </Background>
        </>
    );
};

export default LandingPage;
