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
        type: Object,
        default: {
            HouseNo: {
                type: String,
                default: ""
            },
            ApartmentName: {
                type: String,
                default: ""
            },
            Street: {
                type: String,
                default: ""
            },
            Landmark: {
                type: String,
                default: ""
            },
            AreaDetails: {
                type: String,
                default: ""
            },
            City: {
                type: String,
                default: ""
            },
            PinCode: {
                type: String,
                default: ""
            },
            NickName: {
                type: String,
                default: ""
            }
        }
    }
});

module.exports = mongoose.model('Customer', customerSchema)