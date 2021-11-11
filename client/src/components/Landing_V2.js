import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing_V2.css';

export default function() {
  return (
    <>
      <div className="hero-area">
        <img className="hero-image" src="https://images.unsplash.com/photo-1534951474654-87823058c487?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1123&q=80"></img>
        <div className="landing-button-group d-flex">
          <button className="btn btn-outline-light bg-transparent shadow-sm landing-signup-button">Sign Up</button>
          <button className="btn btn-outline-light bg-transparent shadow-sm landing-signin-button">Sign In</button>
        </div>
      </div>
    </>
  );
}