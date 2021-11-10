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
            <a className="navbar-brand" href="#">The Wish Trip</a>
            <button className="btn btn-sm btn-outline-light bg-transparent shadow-sm">Log Out</button>
          </div>
        </nav>
      </>
    )
};

export default Header