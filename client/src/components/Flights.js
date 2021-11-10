import { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
//pretty sure I'm going to need this, ask John-Mark
import Auth from '../utils/auth';
import { saveTrip, SearchFlights } from '../utils/API';

//Complies the build onto the page
const Flights = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [flights, setFlights] = useState([]);
    const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;

    //results[0].id

    // useEffect(() => {
    //     fetch('https://priceline-com-provider.p.rapidapi.com/v1/flights/locations?name=${travelingTo}', {
    //         'headers': {
    //           'sec-fetch-dest': 'empty',
    //           'sec-fetch-mode': 'cors',
    //           'sec-fetch-site': 'same-site',
    //           'usequerystring': 'true',
    //           'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
    //           'x-rapidapi-key': 'ddd578e581msh5c1096c3181d1a0p1d59c8jsn253cf63240a9',
    //           'x-rapidapi-ua': 'RapidAPI-Playground'
    //         },
    //         'referrer': 'https://rapidapi.com/',
    //         'referrerPolicy': 'strict-origin-when-cross-origin',
    //         'body': null,
    //         'method': 'GET',
    //         'mode': 'cors',
    //         'credentials': 'omit'
    //       })
    //         .then(res => res.json())
    //         .then((result) => {
    //             console.log("all good")
    //             setIsLoaded(true);
    //             setFlights(result);
    //             setError(null);

    //         })
    //         .catch(error => {
    //             console.log("all bad")
    //             setIsLoaded(true);
    //             setError(error);
    //             setFlights([]);
    //         }
    //         )
    // }, [])

    //fetch('https://priceline-com-provider.p.rapidapi.com/v1/flights/locations?name=${travelingFrom}', {
    //         'headers': {
    //           'sec-fetch-dest': 'empty',
    //           'sec-fetch-mode': 'cors',
    //           'sec-fetch-site': 'same-site',
    //           'usequerystring': 'true',
    //           'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
    //           'x-rapidapi-key': 'ddd578e581msh5c1096c3181d1a0p1d59c8jsn253cf63240a9',
    //           'x-rapidapi-ua': 'RapidAPI-Playground'
    //         },
    //         'referrer': 'https://rapidapi.com/',
    //         'referrerPolicy': 'strict-origin-when-cross-origin',
    //         'body': null,
    //         'method': 'GET',
    //         'mode': 'cors',
    //         'credentials': 'omit'
    //       }).then(res => res.json())
    //         .then((result) => {
    //             console.log("all good")
    //             setIsLoaded(true);
    //             setFlights(result);
    //             setError(null);

    //         })
    //         .catch(error => {
    //             console.log("all bad")
    //             setIsLoaded(true);
    //             setError(error);
    //             setFlights([]);
    //         }
    //         )
    // }, [])
    //let locationDeparture = results[0].id
    //let locationArrival = results[0].id
    //     fetch("https://priceline-com-provider.p.rapidapi.com/v1/flights/search?sort_order=PRICE&location_departure=${locationDeparture}&date_departure=${departureDate}&class_type=ECO&location_arrival=${locationArrival}&itinerary_type=ONE_WAY&price_max=${maxTicketPrice}&date_departure_return=${returnDate}&duration_max=2051&number_of_stops=0&price_min=100&number_of_passengers=${passengers}", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "priceline-com-provider.p.rapidapi.com",
    //         "x-rapidapi-key": "ddd578e581msh5c1096c3181d1a0p1d59c8jsn253cf63240a9"
    //     }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // }).then(res => res.json())
    //         .then((result) => {
    //             console.log("all good")
    //             setIsLoaded(true);
    //             setFlights(result);
    //             setError(null);

    //         })
    //         .catch(error => {
    //             console.log("all bad")
    //             setIsLoaded(true);
    //             setError(error);
    //             setFlights([]);
    //         }
    //         )
    // }, []);

    if (error) {
        return <div> Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div> Loading....</div>
    } else if (isEmpty(flights)) {
        return <div>"no flights"</div>
    } else {
        return (
            <Container>
                <h1>Search for Flights!</h1>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Row>
                        <Col xs={12} md={8}>
                            <Form.Control
                                name='travelingFrom'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                size='lg'
                                placeholder='Search for Flights'
                            />
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Control
                                name='travelingTo'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                size='lg'
                                placeholder='Search for Flights'
                            />
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Control
                                name='departureDate'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                size='lg'
                                placeholder='Search for Flights'
                            />
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Control
                                name='returnDate'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                size='lg'
                                placeholder='Search for Flights'
                            />
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Control
                                name='passengers'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                size='lg'
                                placeholder='Search for Flights'
                            />
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Control
                                name='maxTicketPrice'
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
                <ul>
                    {flights.map(flights => (
                        <li key={flights.id}>
                            {flights.name}
                        </li>
                    ))}
                </ul>
            </Container>
        )
    }
}


export default Flights;