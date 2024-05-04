const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    taste:{
        type: String,
        enum: ['spicy','sour','sweet'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false,
        required: true
    },
    ingredients:{
        type: [String],
        default: []
    },
    num_sales:{
        type: Number,
        default: 0
    }
})

const MenuItem = new mongoose.model('MenuItem',menuSchema)
module.exports = MenuItem