import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';

export const RoundAvatar = styled(Image)`
    border-radius: 50%;
`;

export const Title = styled(Typography)`
    font-weight: bold;
`;

export const Confirm = styled(Box)`
    display: flex;

    & p {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Reservation = styled(Box)`
    & .react-datepicker-popper {
        z-index: 1000;
    }
`;

export const WrappedContainer = styled(Container)`
    margin-top: 20px;
    overflow: auto;
    height: 90vh;

    & .avatar-container {
        text-align: center;
    }
`;
