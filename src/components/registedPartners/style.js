import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const WrappedContainer = styled(Box)`
    background-color: rgb(82, 92, 105);
    color: rgb(204, 204, 204);
    max-width: 100%;
`;

export const Content = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const SearchField = styled(Box)`
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15);
    margin-top: 20px;
`;

export const GridContainer = styled(Box)`
    margin: 20px 0px;
    height: 75vh;
    overflow: auto;
    background: white;
    padding: 24px;
`;
