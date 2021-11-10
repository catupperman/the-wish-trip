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
    tripDate: Int
    budget: Int
    savedFlight: [Flights]
}

type Flights {
    airLine: String
    airportCode: String
    cabinName: String
    totalFare: Int
    departureDate: Int
    flightDuration: Int
    originAirport: String
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    savedTrip(input: TripInput!): User
    deleteTrip(_id: String!): User
}

input TripInput {
    name: String
    destination: String
    tripDate: String
    budget: Int
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;