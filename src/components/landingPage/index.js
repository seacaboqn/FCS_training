import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { ServiceName } from './style';
const LandingPage = () => {
    return (
        <div
            style={{
                // backgroundImage: '../../../public/images/background.jpg',
                backgroundImage:
                    'https://cdn-img.thethao247.vn/origin_414x0/storage/files/anhtuan/2022/01/18/chuyen-nhuong-bong-da-18-1-messi-chot-vu-barca-mu-tra-luong-khong-tuong-cho-hlv-moi-104876.jpg',
                // width: '100%',
                // height:,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // height: '100%',
                // margin: '0',
                // minHeight: '100%',
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                textAlign: 'center',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            {/* <Image src="https://cdn-img.thethao247.vn/origin_414x0/storage/files/anhtuan/2022/01/18/chuyen-nhuong-bong-da-18-1-messi-chot-vu-barca-mu-tra-luong-khong-tuong-cho-hlv-moi-104876.jpg" /> */}
            <h1
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '0px',
                    width: '600px',
                    wordBreak: 'break-word'
                }}
            >
                <p style={{ marginRight: '10px' }}>Welcome to </p>
                <ServiceName>EPOS Booking Service</ServiceName>
            </h1>
            <p>The online booking assistant to fill your schedule</p>
            <Button variant="contained" style={{ width: '350px' }}>
                checkout our registered partners
            </Button>
        </div>
    );
};

export default LandingPage;
