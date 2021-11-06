const { Schema, model } = require('mongoose');
const flightSchema = require('./Flight');
const hotelSchema = require('./Hotel');

const tripsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    tripDate: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    savedFlight: [flightSchema],
    savedHotel: [hotelSchema]
});

const Trips = model("Trips", tripsSchema);

module.exports = Trips;