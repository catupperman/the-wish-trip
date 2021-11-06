const { Schema, model } = require('mongoose');

const flightSchema = new Schema({
    airLine: {
        type: String,
        required: true
    },
    airportCode: {
        type: String,
        required: true
    },
    cabinName: {
        type: String,
        required: true
    },
    totalFare: {
        type: Number,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    flightDuration: {
        type: Number,
        required: true
    },
    originAirport: {
        type: String,
        required: true
    }
});

const Flights = model("Flights", flightSchema);

module.exports = Flights;