import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { RoundAvatar, Title, Confirm } from './style';
import { InputAdornment, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import UnstyledSelectRichOptions from '../UI/customSelectBox'


import 'react-phone-input-2/lib/material.css';

import MenuItem from '@mui/material/MenuItem';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const currencies = [
    {
        value: 'USD',
        label: '$'
    },
    {
        value: 'EUR',
        label: '€'
    },
    {
        value: 'BTC',
        label: '฿'
    },
    {
        value: 'JPY',
        label: '¥'
    }
];

const Form = (props) => {
    // const { value, defaultCountry, onChange, classes } = props;
    const [enableButton, setEnableButton] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch('example')); // watch input value by passing the name of it

    const ChecboxOnChangeHandler = () => {
        setEnableButton((prev) => {
            return !prev;
        });
        console.log(enableButton);
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Box style={{ textAlign: 'center' }}>
                <RoundAvatar
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
                    alt="Picture of the author"
                    width={150}
                    height={150}
                />
            </Box>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <Title>1. Reservation</Title>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { sm: '1fr 1fr' },
                                gap: 2
                            }}
                        >
                            <TextField
                                id="outlined-required"
                                label="Location * "
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnIcon />
                                        </InputAdornment>
                                    )
                                }}
                                margin="normal"
                                select
                                {...register('location', {
                                    required: 'Location is required'
                                })}
                                error={!!errors.location}
                                helperText={errors?.location?.message}
                            >
                                {currencies.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined-required"
                                label="Pax *"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <GroupAddIcon />
                                        </InputAdornment>
                                    )
                                }}
                                margin="normal"
                                select
                                {...register('pax', {
                                    required: 'Pax is required'
                                })}
                                error={!!errors.pax}
                                helperText={errors?.pax?.message}
                            >
                                {currencies.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <TextField
                            id="outlined-required"
                            label="Date Time"
                            placeholder="Pick your time"
                            fullWidth={true}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WatchLaterIcon />
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                            {...register('datetime', {
                                required:
                                    'There are no available times! Please select another date'
                            })}
                            error={!!errors.datetime}
                            helperText={errors?.datetime?.message}
                        />
                    </Box>
                    <Box>
                        <Title>2. Infomation</Title>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { sm: '1fr 1fr' },
                                gap: 2
                            }}
                        >
                            <TextField
                                id="outlined-required"
                                label="First Name *"
                                placeholder="First Name"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    )
                                }}
                                margin="normal"
                                {...register('firstname', {
                                    required: 'First Name is required'
                                })}
                                error={!!errors.firstname}
                                helperText={errors?.firstname?.message}
                            />
                            <TextField
                                id="outlined-required"
                                label="Last Name *"
                                placeholder="Last Name"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    )
                                }}
                                margin="normal"
                                {...register('lastname', {
                                    required: 'Last Name is required'
                                })}
                                error={!!errors.lastname}
                                helperText={errors?.lastname?.message}
                            />
                        </Box>
                        <TextField
                            id="outlined-required"
                            label="Email *"
                            placeholder="Email"
                            fullWidth={true}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailOutlineIcon />
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                            {...register('email', {
                                required: 'Email is required'
                            })}
                            error={!!errors.email}
                            helperText={errors?.email?.message}
                        />
                        <TextField
                            id="outlined-required"
                            label="Phone"
                            type="number"
                            placeholder="Phone"
                            fullWidth={true}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocalPhoneIcon />
                                        <UnstyledSelectRichOptions />
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                            {...register('phone', {
                                required: 'Phone is required'
                            })}
                            error={!!errors.phone}
                            helperText={errors?.phone?.message}
                        />
                        <TextField
                            id="outlined-required"
                            label="Message"
                            fullWidth={true}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EventNoteIcon />
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                            {...register('message', { required: true })}
                        />
                    </Box>
                    {/* <PhoneInput
                        country={'sg'}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                        }}
                        {...register('test')}
                    /> */}

                    
                    <Confirm>
                        <Checkbox
                            {...label}
                            onChange={ChecboxOnChangeHandler}
                        />

                        <Typography
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            I have read, agreed and understood the stated terms
                            and conditions{' '}
                        </Typography>
                    </Confirm>
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth={true}
                        disabled={!enableButton}
                    >
                        BOOK
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Form;
