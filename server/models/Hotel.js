const { Schema, model } = require('mongoose');

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    photo: {
        type: String
    }

});

const Hotels = model("Hotels", hotelSchema);

module.exports = Hotels;