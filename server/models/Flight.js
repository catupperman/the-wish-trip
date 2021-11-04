const { Schema } = require('mongoose');

const flightSchema = new Schema({
    airLine: {
        type: String,
        required: true
    },
    recordLocator: {
        type: String,
        required: true
    },
    airportCode: {
        type: String,
        required: true
    }
});

const Flights = model("Flights", flightSchema);

module.exports = Flights;