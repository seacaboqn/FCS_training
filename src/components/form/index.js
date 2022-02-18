import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { RoundAvatar } from './style';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

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
                        <Typography>1. Reservation</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Location"
                            defaultValue="Hello World"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="RequPaxired"
                            defaultValue="Hello World"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Date Time"
                            placeholder="Pick Your Time"
                            fullWidth={true}
                        />
                    </Box>

                    <Box>
                        <Typography>2. Infomation</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            placeholder="First Name"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            placeholder="Last Name"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            placeholder="Email"
                            fullWidth={true}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone"
                            placeholder="Phone"
                            fullWidth={true}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Message"
                            fullWidth={true}
                        />
                    </Box>

                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue="test" {...register('example')} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input
                        {...register('exampleRequired', { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}

                    <Checkbox {...label} />

                    <input type="submit" />
                </form>
            </Box>
        </Container>
    );
};

export default Form;
