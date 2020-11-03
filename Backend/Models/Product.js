const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const productSchema = new Schema({
    "productName": {
        type: String,
        required: true
    },
    "imageUrl": {
        type: String,
        required: true
    },
    "brandName": {
        type: String,
        required: true
    },
    "ratings": {
        type: Number,
        default: 2.5
    },
    "reviews": {
        type: Number,
        default: 0
    },
    "reviewList": {
        type: Array,
        default: []
    },
    "subCategory": {
        type: String,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "size": {
        type: Array,
        required: true
    },
    "mrp": {
        type: Array,
        required: true
    },
    "offer": {
        type: Number,
        default: 0
    },
    "description": {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Product', productSchema)