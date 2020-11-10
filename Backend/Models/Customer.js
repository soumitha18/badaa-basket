const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    number: {
        type: Number,
        default: 0
    },
    order: {
        type: Array,
        default: []
    },
    basket: {
        type: Array,
        default: []
    },
    membership: {
        type: Array,
        default: []
    },
    wallet: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Customer', customerSchema)