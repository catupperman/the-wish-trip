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

    // useEffect(() => {
    //     fetch('https://priceline-com-provider.p.rapidapi.com/v1/flights/locations?name=Dublin', {
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

    if (error) {
        return <div> Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div> Loading....</div>
    } else if (isEmpty(flights)) {
        return <div>"no flights"</div>
    } else {
        return (
            <ul>
                {flights.map(flights => (
                    <li key={flights.id}>
                        {flights.name}
                    </li>
                ))}
            </ul>
        )
    }
}    // const [searchedFlights, setSearchedFlights] = useState([]);
// const [searchInput, setSearchInput] = useState('');

// const searchFlights = async (query) => {
//     const response = await SearchFlights(query);
//     setSearchedFlights(response.data.data);
// };
// //allows for connection between api and react webpage
// useEffect(() => {
//     searchFlights();
// }, []);

// const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     //if there is no input, nothing happens on the screen, prevents default
//     if (!searchInput) {
//         return false;
//     }

//     try {
//         const response = await SearchFlights(searchInput);

//         if (!response.ok) {
//             throw new Error('something went wrong!');
//         }
//         //turns requests into json
//         const { items } = await response.json();
//         //specific data from the API, and directed
//         //TODO: FIX THIS MANIPULATION MESS
//         const flightData = items.map((flight) => ({
//             flightId: flight.id


//         }))
//         //combines the data into a nice neat package?
//         setSearchedFlights(flightData)

//     } catch (err) {
//         console.error(err);
//     }
// }

// return (
//     <>


{/* <h1>Search for Flights!</h1>
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
                </Form> */}
{/* <SearchFlights />
            

        </> */}
//     )
// }

export default Flights;