import React from 'react';
import { WrappedContainer } from './style';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const RegisteredPartners = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }));
    return (
        <WrappedContainer
            maxWidth={false}
            id="section-2"
            style={{
                backgroundColor: 'rgb(82, 92, 105)',
                color: 'rgb(204, 204, 204)'
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                }}
            >
                <Typography component="a" href="/#section-1">
                    <SvgIcon>
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                    </SvgIcon>
                </Typography>
            </Box>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '10px'
                }}
            >
                <Typography component="h1" variant="h4">
                    EPOS Restaurant Booking
                </Typography>
                <Box>
                    <Box
                        style={{
                            borderRadius: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            // position: 'absolute',
                            // left: '50px',
                            // right: '50px',
                            marginTop: '20px'
                        }}
                    >
                        <InputBase
                            startAdornment={
                                <SearchIcon style={{ margin: '0px 10px' }} />
                            }
                            placeholder="Search..."
                        />
                    </Box>
                    <Box>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                        >
                            {Array.from(Array(6)).map((_, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Item>xs=2</Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </WrappedContainer>
    );
};

export default RegisteredPartners;
