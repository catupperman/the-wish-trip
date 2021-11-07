import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

const AppNavbar = () => {
    // set modal display state
    const [showModal, setShowModal] = useState(false);
    return (
       <ul className="nav nav-tabs">
           <li className="nav-item">
           {/* <a
                href="#ContactUs"
                onClick={() => handlePageChange('ContactUs')}
                className={'ContactUs'}
                >
                    Contact Us
                </a> */}
           </li>
       </ul>
    );
};

export default AppNavbar;