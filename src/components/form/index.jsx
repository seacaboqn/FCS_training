import React, { useState, useRef, forwardRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { RoundAvatar, Title, Confirm, Reservation } from './style';
import { InputAdornment, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import UnstyledSelectRichOptions from '../UI/customSelectBox';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

import 'react-phone-input-2/lib/material.css';

import MenuItem from '@mui/material/MenuItem';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const currencies = [
    {
        value: 'USD',
        label: '258 Ton Dan'
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
    const [value, setValue] = useState(null);
    const [enableButton, setEnableButton] = useState(false);
    const [startDate, setStartDate] = useState();
    const [inputTime, setInputTime] = useState('test');
    const inputRef = useRef(null);
    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    // setHours(setMinutes(new Date(), 0), 9)
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const onSubmit = (data) => console.log(data);

    const ChecboxOnChangeHandler = () => {
        setEnableButton((prev) => {
            return !prev;
        });
    };

    const [date, setDate] = useState();

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Container
            maxWidth="lg"
            style={{ marginTop: '20px', overflow: 'auto', height: '90vh' }}
        >
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
                    <Reservation>
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
                                defaultValue=""
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
                                defaultValue=""
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

                        <Controller
                            control={control}
                            rules={{
                                required:
                                    'There are no available times! Please select another date'
                            }}
                            name="datetime"
                            render={({
                                field: { onChange, onBlur, name, value, ref }
                            }) => (
                                <DatePicker
                                    name={name}
                                    autoComplete="off"
                                    onChange={onChange}
                                    // onBlur={onBlur}
                                    selected={value}
                                    showTimeSelect
                                    filterTime={filterPassedTime}
                                    dateFormat="EEEE MMMM d, yyyy h:mm aa"
                                    placeholderText="Pick your time"
                                    customInput={
                                        <TextField
                                            id="outlined-required"
                                            label="Date Time *"
                                            // focus erros
                                            // inputRef={ref}
                                            fullWidth={true}
                                            value={startDate}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <WatchLaterIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                            margin="normal"
                                            error={!!errors.datetime}
                                            helperText={
                                                errors?.datetime?.message
                                            }
                                        />
                                    }
                                />
                            )}
                        />
                    </Reservation>
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
                            label="Phone *"
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
                            {...register('message')}
                        />
                    </Box>

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
