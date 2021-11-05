const { Schema } = require('mongoose');

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
        type: String,
        required: true
    },
    photo: {
        type: String
    }

});

const Hotels = model("Hotels", hotelSchema);

module.exports = Hotels;