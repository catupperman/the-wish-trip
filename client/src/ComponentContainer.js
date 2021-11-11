import React, { useState } from 'react';
import LandingV2 from './components/Landing_V2';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import CreateTrip from './components/CreateTrip';
import Header from './components/Header';
import { Navbar } from 'react-bootstrap';


export default function ComponentChange() {
    const [currentPage, setCurrentPage] = useState('LandingV2');

    const renderPage = () => {
        if (currentPage === 'LandingV2') {
            return <LandingV2 />;
        }
        if (currentPage === 'LoginForm') {
            return <LoginForm />;
        }
        if (currentPage === 'SignUpForm') {
            return <SignUpForm />;
        }
        if (currentPage === 'CreateTrip') {
            return <CreateTrip />
        }
    }
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )


}