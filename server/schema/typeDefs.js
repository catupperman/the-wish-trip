const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    adress: String
    city: String
    state: String
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
    loacation: String
    rate: Number
    photo: String
}

type Flights {
    airLine: String
    recordLocator: String
    airportCode: String
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