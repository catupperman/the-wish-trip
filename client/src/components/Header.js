import React from 'react';
// import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';

const Header = ({ currentPage, handlePageChange }) => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid d-flex">
          <a className="navbar-brand brand-text" href="#">The Wish Trip</a>
          <button className="btn btn-sm btn-outline-light bg-transparent shadow-sm logout-button" href="#">Log Out</button>
          <button className="btn btn-outline-light bg-transparent shadow-sm landing-signup-button" href="#SignupForm" onClick={() => handlePageChange('SignupForm')}>Sign Me Up</button>
          <button className="btn btn-outline-light bg-transparent shadow-sm landing-signin-button" href="#LoginForm" onClick={() => handlePageChange('LoginForm')}>Sign Me In</button>
        </div>
      </nav>
    </>
  )
};

export default Header