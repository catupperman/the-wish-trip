import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import background from './assets/images/landingBackdrop.jpeg';

const LandingPage = () => {
    return (

        <div style={{ backgroundImage: `url(${background})`, height: '100%' }}>

            {/* <div style={{ alignContent: 'center' }}> */}
            <Button >
                Sign Me Up
                </Button>
            <Button>
                I know the drill, Sign Me In
                </Button>
            <p> An handy little app to keep you on track with your travel dreams.</p>
        </div>

    )
}

export default LandingPage;