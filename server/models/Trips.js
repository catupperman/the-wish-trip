const { Schema, model } = require('mongoose');

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
    savedFlight: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Flights'
        }
    ]
});

const Trips = model("Trips", tripsSchema);

module.exports = Trips;