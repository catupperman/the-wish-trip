import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me {
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
}`