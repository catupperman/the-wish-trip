import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

const AppNavbar = () => {
    // set modal display state
    // const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Navbar>
                <Conatiner>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            {/* <a
                href="#ContactUs"
                onClick={() => handlePageChange('ContactUs')}
                className={'ContactUs'}
                >
                    Contact Us
                </a> */}
                            <button>Contact Us</button>
                        </li>
                        <li className="logIn">
                            <button>Login In</button>
                        </li>
                        <li className="signUp">
                            <button> Sign Up </button>
                        </li>
                        {/* These Two will eventually toggle away as a User has signed in or signed up to show "My Trips" as a button instead */}
                    </ul>
                </Conatiner>
            </Navbar>
        </>
    );
};

export default AppNavbar;