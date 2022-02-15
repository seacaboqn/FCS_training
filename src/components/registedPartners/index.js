import React from 'react';
import { WrappedContainer } from './style';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { Input } from '@mui/material';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const RegisteredPartners = () => {
    return (
        <WrappedContainer
            id="section-2"
            style={{ backgroundColor: 'rgb(82, 92, 105)' }}
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
                <Typography component="h1">EPOS Restaurant Booking</Typography>
                <Box>
                    <Box>
                        <InputBase
                            startAdornment={<SearchIcon />}
                            color="error"
                            placeholder="Search..."
                        />
                    </Box>
                    {/* <Paper
                        component="form"
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 400
                        }}
                    >
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        /> */}
                    {/* </Paper> */}
                </Box>
            </Box>
        </WrappedContainer>
    );
};

export default RegisteredPartners;
