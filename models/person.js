const mongoose = require("mongoose")

// 1) create schema
const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number
    }
})

// 2) create model to export
const Person = mongoose.model('Person',personschema)
module.exports = Person
