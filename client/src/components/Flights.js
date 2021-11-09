import { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { saveTrip, SearchFlights } from '../utils/API';


const Flights = () => {
    const [searchedFlights, setSearchedFlights] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const searchFlights = async (query) => {
        const response = await SearchFlights(query);
        setSearchedFlights(response.data.data);
    };

    useEffect(() => {
        searchFlights();
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await SearchFlights(searchInput);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            const { items } = await response.json();

            const flightData = items.map((flight) => ({
                flightId: flight.id

            }))

            setSearchedFlights(flightData)

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
           
                <Contianer>
                    <h1>Search for Flights!</h1>
                    <Form onSubmit={handleFormSubmit}>
                    <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for Flights'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
                    </Form>
            <SearchFlights results={results} />
            </Contianer>
           
        </>
    )
}

export default Flights;