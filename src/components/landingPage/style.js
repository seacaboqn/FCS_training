import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

export const ServiceName = styled.span`
    color: #1e88e5;
`;

export const LandingPageWrapper = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    width: 100vw;
    height: 100vh;
    color: rgba(0, 0, 0, 0.54);
    p {
        font-size: 25px;
    }
    text-align: center;
    z-index: 1000;
`;

export const Grettings = styled(Typography)`
    font-weight: bold;

    h2 {
        line-height: 1.2;
    }
`;

export const Description = styled(Typography)`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Background = styled.div`
    left: 0px;
    width: 100%;
    bottom: 0px;
    z-index: 1px;
    position: absolute;
    font-size: 0px;
`;

export const WrappedContainer = styled(Container)`
    height: 100vh;
`;
