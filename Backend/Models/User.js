const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        min: 10
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    }
});

module.exports = mongoose.model('User', userSchema)