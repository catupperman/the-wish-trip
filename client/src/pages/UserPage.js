import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const UserPage = () => {
    return (
        <Form.Group>
            <Col xs={12} md={8}>
                <Form.Label htmlFor='tripName'>Trip Name</Form.Label>
                <Form.Control 
                type='tripName' 
                placeholder='Ireland'
                name='tripName'
                onChange={handleInputChange}
                value={userFormData.passwor}
                required
                />   
            </Col>

        </Form.Group>
    )
}

export default UserPage;