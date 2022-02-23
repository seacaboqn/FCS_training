import React, { useEffect, useState } from 'react';
import { WrappedContainer, Content, SearchField, GridContainer } from './style';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import Input from '@mui/material/Input';

const dummyData = [
    {
        name: 'Tan',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Vi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Duy'
    },
    {
        name: 'Tan1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Vi1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Duy1'
    },
    {
        name: 'Tan2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Khang',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Trong',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Tin'
    },
    {
        name: 'Yen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Thanh',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Binh'
    },
    {
        name: 'Tho',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Loc',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Phuc'
    },
    {
        name: 'An',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Hoa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Hoai',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
    },
    {
        name: 'Thuong'
    }
];

const RegisteredPartners = () => {
    const [inputSearch, setInputSearch] = useState('');
    const [searchResult, setSearchResult] = useState(dummyData);

    useEffect(() => {
        setSearchResult(
            dummyData.filter((item) => {
                return item.name
                    .toLowerCase()
                    .includes(inputSearch.toLowerCase());
            })
        );
    }, [inputSearch]);
    const Item = styled(Paper)(({ theme }) => ({
        textAlign: 'center'
    }));
    return (
        <WrappedContainer maxWidth={false} id="section-2">
            <Container>
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
                <Content>
                    <Typography component="h1" variant="h4">
                        EPOS Restaurant Booking
                    </Typography>
                    <Box style={{ width: '100%' }}>
                        <SearchField>
                            <InputBase
                                startAdornment={
                                    <SearchIcon
                                        style={{
                                            margin: '0px 10px',
                                            height: '40px',
                                            width: '40px'
                                        }}
                                    />
                                }
                                placeholder="Search..."
                                style={{
                                    width: '100%',
                                    padding: '8px 8px 8px 0px',
                                    fontSize: '1.5rem'
                                }}
                                onChange={(e) => {
                                    setInputSearch(e.target.value);
                                }}
                            />
                        </SearchField>

                        <GridContainer>
                            <Grid
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                                {searchResult.map((_, index) => (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={4}
                                        md={3}
                                        key={index}
                                    >
                                        <Link href="/form" passHref>
                                            <Item>
                                                <Card
                                                    style={{
                                                        borderRadius: '4px'
                                                    }}
                                                >
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height="150px"
                                                            image={
                                                                _.image ===
                                                                undefined
                                                                    ? 'https://1.bp.blogspot.com/-m3UYn4_PEms/Xnch6mOTHJI/AAAAAAAAZkE/GuepXW9p7MA6l81zSCnmNaFFhfQASQhowCLcBGAsYHQ/s1600/Cach-Lam-Avatar-Dang-Hot%2B%25281%2529.jpg'
                                                                    : 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
                                                            }
                                                            alt={_.name}
                                                        />
                                                        <CardContent>
                                                            <Typography
                                                                gutterBottom
                                                                variant="h5"
                                                                component="div"
                                                            >
                                                                {_.name}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Item>
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </GridContainer>
                    </Box>
                </Content>
            </Container>
        </WrappedContainer>
    );
};

export default RegisteredPartners;
