import React from 'react';
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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch('example')); // watch input value by passing the name of it

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
                        <TextField
                            required
                            id="outlined-required"
                            label="Location"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Pax"
                            margin="normal"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Date Time"
                            placeholder="Pick Your Time"
                            fullWidth={true}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WatchLaterIcon />
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                        />
                    </Box>

                    <Box>
                        <Title>2. Infomation</Title>
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            placeholder="First Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            placeholder="Last Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
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
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone"
                            placeholder="Phone"
                            fullWidth={true}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocalPhoneIcon />
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                        />
                        <TextField
                            required
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
                        />
                    </Box>

                    {/*/!* register your input into the hook by invoking the "register" function *!/*/}
                    {/*<input defaultValue="test" {...register('example')} />*/}

                    {/*/!* include validation with required or other standard HTML validation rules *!/*/}
                    {/*<input*/}
                    {/*    {...register('exampleRequired', { required: true })}*/}
                    {/*/>*/}
                    {/*/!* errors will return when field validation fails  *!/*/}
                    {/*{errors.exampleRequired && (*/}
                    {/*    <span>This field is required</span>*/}
                    {/*)}*/}

                    <Confirm>
                        <Checkbox {...label} />

                        <Typography>
                            I have read, agreed and understood the stated terms
                            and conditions{' '}
                        </Typography>
                    </Confirm>

                    <Button variant="contained" type="submit" fullWidth={true}>
                        BOOK
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Form;
