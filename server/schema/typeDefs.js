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
    tripDate: Int
    budget: Int
    savedFlight: [Flights]
    savedHotel: [Hotels]
}

type Hotels {
    name: String
    location: String
    rate: Int
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