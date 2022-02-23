import React from 'react';
import Button from '@mui/material/Button';
import {
    ServiceName,
    LandingPageWrapper,
    Background,
    WrappedContainer
} from './style';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

const LandingPage = () => {
    const router = useRouter();
    const switchHandler = () => {
        router.push('/#section-2');
    };
    return (
        <>
            <WrappedContainer id="section-1" maxWidth={false}>
                <LandingPageWrapper>
                    <Typography
                        variant="h2"
                        component="h1"
                        className="greeting"
                    >
                        Welcome to{' '}
                        <ServiceName>EPOS Booking Service</ServiceName>
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h5"
                        className="description"
                    >
                        {' '}
                        The online booking assistant to fill your schedule
                    </Typography>
                    <Button variant="contained" onClick={switchHandler}>
                        checkout our registered partners
                    </Button>
                </LandingPageWrapper>
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
                    {/*<SvgIcon>*/}
                    {/*    <path fill="#525c69" d="M753.1,434.2c110.6,63.7,277.7,70.6,373.4,15.4L1905,0v555.9H0V0.2L753.1,434.2z" />*/}
                    {/*</SvgIcon>*/}
                </Background>
            </WrappedContainer>
        </>
    );
};

export default LandingPage;
