import React from 'react';
import { ModalFooter } from 'react-bootstrap';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <>

      {/* footer */}
      <br/>
      <footer>
        <div className="container">
          <div className="row">

            {/* left side */}
            <div className="col">
              <h5>
                The Wish Trip
              </h5>
              <p>
                Let us help you turn your wish into a trip!
              </p>
            </div>

            {/* right side */}
            <div className="col">
              <h5 className="icon-header">
                Contact Us!
              </h5>
              <ul className="icon-set d-flex">
                
                {/* Cat */}
                <li><a href="https://github.com/catupperman" target="_blank"><img src="https://avatars.githubusercontent.com/u/84750356?v=4" alt="catupperman" title="Cat"/></a></li>

                {/* John-Mark */}
                <li><a href="https://github.com/Kalmnir" target="_blank"><img src="https://avatars.githubusercontent.com/u/84051952?v=4" alt="Kalmnir" title="John-Mark"/></a></li>

                {/* Kira */}
                <li><a href="https://github.com/j1741" target="_blank"><img src="https://avatars.githubusercontent.com/u/84889065?v=4" alt="J1741" title="Kira"/></a></li>

              </ul>
            </div>

          </div>
        </div>
      </footer>

    </>
  );
} 