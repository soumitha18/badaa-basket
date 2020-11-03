const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    locations: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Location', locationSchema)