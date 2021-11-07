import React from 'react';
import Navbar from '../components/Navbar';

const Header = ({ currentPage, handlePageChange }) => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon =   <FaBars 
    className="mobile-icon"
    onClick={() => setOpen(!open)}
    />

    const closeIcon =   <MdOutlineClose
    className="mobile-icon"
    onClick={() => setOpen(!open)}
    />

    return (
        <>
        <nav class="nav">
           <header class="header">
               The Wish Trip
               </header> 
               {open ? closeIcon : hamburgerIcon}
        </nav>
        </>
    )
};

export default Header