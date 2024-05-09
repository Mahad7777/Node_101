const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

// 1) create schema
const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    salary: {
        type: Number
    }
})

personschema.pre('save', async function(next){
    const person = this
    // if (!person.isModified('password')) return next();
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(person.password, salt)
        person.password = hashedpassword
        next()
    }catch(err){
        return next(err)
    }
})

personschema.methods.comparePassword = async function (candidatepassword){
    try{
        const isMatch = await bcrypt.compare(candidatepassword, this.password)
        return isMatch
    }catch(err){
        throw err
    }
}

// 2) create model to export
const Person = mongoose.model('Person',personschema)
module.exports = Person
