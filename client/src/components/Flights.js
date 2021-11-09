import { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { saveTrip, SearchFlights } from '../utils/API';


const Flights = () => {

    const [results, setResults] = useState([]);

    const searchFlights = async (query) => {
        const response = await SearchFlights(query);
        setResults(response.data.data);
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

            setSearchedFlights(flightData)

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            
            <SearchFlights results={results} />
        </>
    )
}

export default Flights;