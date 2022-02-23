import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const WrappedContainer = styled(Box)`
    background-color: rgb(82, 92, 105);
    color: rgb(204, 204, 204);
    max-width: 100%;
    height: 100vh;
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

    .MuiInputBase-root {
        color: inherit;
        width: 100%;
        padding: 8px 8px 8px 0px;
        font-size: 1.5rem;

        .MuiSvgIcon-root {
            margin: 0px 10px;
            height: 40px;
            width: 40px;
        }
    }
`;

export const GridContainer = styled(Box)`
    margin: 20px 0px;
    height: 75vh;
    overflow: auto;
    background: white;
    padding: 24px;
    border-radius: 4px;

    .MuiPaper-root-MuiCard-root {
        border-radius: 4px;
    }
`;

export const GoUpLink = styled(Box)`
    & a {
        @keyframes bounce-1 {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-7px);
            }
            100% {
                transform: translateY(0);
            }
        }
        animation-name: bounce-1;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    display: flex;
    justify-content: center;
    width: 100%;

    & .MuiSvgIcon-root {
        fill: rgb(204, 204, 204);
    }
`;

export const Item = styled(Paper)`
    text-align: center;
`;
