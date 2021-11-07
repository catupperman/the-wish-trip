const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    email: String
    password: String
    savedTrips: [Trips]
}

type Trips {
    name: String
    destination: String
    tripDate: String
    budget: String
    savedFlight: [Flights]
    savedHotel: [Hotels]
}

type Hotels {
    name: String
    starRating: Int
    description: String
    rate: Int
    photo: String
}

type Flights {
    airLine: String
    airportCode: String
    cabinName: String
    totalFare: Int
    departueDate: Int
    flightDuration: Int
    originAirport: String
}

type Query {
    me: User
}

type Mutations {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    savedTrip(input: TripInput!): User
    deleteTrip(tripId: String!): User
}

input TripInput {
    name: String
    tripId: String
    destination: String
    tripDate: String
    budget: Number
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;