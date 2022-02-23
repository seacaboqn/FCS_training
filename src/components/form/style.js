import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import DatePicker from 'react-datepicker';

export const RoundAvatar = styled(Image)`
    border-radius: 50%;
`;

export const Title = styled(Typography)`
    font-weight: bold;
`;

export const Confirm = styled(Box)`
    display: flex;
`;

export const Reservation = styled(Box)`
    & .react-datepicker-popper {
        z-index: 1000;
    }
`;
