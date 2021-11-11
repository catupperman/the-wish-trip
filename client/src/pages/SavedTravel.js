import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


const SavedTrip = () => {
    return (
        <Form.Group>
            <Col xs={12} md={8}>
                <Form.Label htmlFor='tripName'> Trip Name </Form.Label>
                <Form.Control
                    type='tripName'
                    placeholder='Ireland'
                    name='tripName'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
            </Col>
            <Col xs={12} md={8}>
                <Form.Label htmlFor='destination'> Destination </Form.Label>
                <Form.Control
                    type='destination'
                    placeholder='Dublin'
                    name='destination'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
            </Col>
            <Col xs={12} md={8}>
                <Form.Label htmlFor='departureCity'> Departure City </Form.Label>
                <Form.Control
                    type='departureCity'
                    placeholder='Philadelphia'
                    name='departure'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
            </Col>
            <Col xs={12} md={8}>
                <Form.Label htmlFor='cost'> Cost </Form.Label>
                <Form.Control
                    type='cost'
                    placeholder='500'
                    name='cost'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
            </Col>
            <Col xs={12} md={8}>
                <Form.Label htmlFor=''> Departure City </Form.Label>
                <Form.Control
                    type='departureCity'
                    placeholder='Philadelphia'
                    name='departureCity'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
            </Col>
            <Col xs={12} md={8}>
                <Form.Label htmlFor='departureDate'> Departure Date </Form.Label>
                <Form.Control
                    type='departureDate'
                    placeholder='2021-12-14'
                    name='departureDate'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
            </Col>
            <Col xs={12} md={8}>
                <Form.Label htmlFor='returnDate'> Return Date </Form.Label>
                <Form.Control
                    type='returnDate'
                    placeholder='2021-12-22'
                    name='returnDate'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
            </Col>
            <Col xs={12} md={8}>
                <Form.Label htmlFor='passengers'> Number of Passengers </Form.Label>
                <Form.Control
                    type='passengers'
                    placeholder='20'
                    name='passengers'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
            </Col>

        </Form.Group >

    )
}

export default SavedTrip;