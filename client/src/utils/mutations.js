import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            email
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
        token
        user {
            _id
            email
        }
    }
}
`;

export const SAVE_TRIP = gql`
mutation savedTrip($input: TripInput!) {
    savedTrip(input: $input) {
        _id
        email
        savedTrips {
            name
            destination
            tripDate
            budget
            savedFlight {
                airLine
                airportCode
                cabinName
                totalFare
                departureDate
                flightDuration
                originAirport
            }
            // savedHotel {
            //     name
            //     starRating
            //     description
            //     rate
            //     photo
            // }
        }
    }
}
`;

export const DELETE_TRIP = gql`
mutation deleteTrip($_id: String!) {
    deleteTrip(_id: $_id) {
        _id
        email
        savedTrips {
            name
            destination
            tripDate
            budget
            savedFlight {
                airLine
                airportCode
                cabinName
                totalFare
                departureDate
                flightDuration
                originAirport
            }
            // savedHotel {
            //     name
            //     starRating
            //     description
            //     rate
            //     photo
            // }
        }
    }
}
`;