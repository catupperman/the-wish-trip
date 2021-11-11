import React from 'react';
import { ModalFooter } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>
                The Wish Trip
              </h5>
              <p>
                Let us help you turn your wish into a trip!
              </p>
            </div>
            <div className="col">
              <h5>
                Contact Us!
              </h5>
              <ul>
                <li>Cat</li>
                <li>John-Mark</li>
                <li>Kira</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 