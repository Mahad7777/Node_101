const mongoose = require("mongoose")
require('dotenv').config() 
// const mongoURL = 'mongodb://mongo:27017/subscribers'
const mongoURL = 'mongodb+srv://mahad9036:H9SjLabT3uv99WCt@cluster0.qsjesjb.mongodb.net/'

// setup mongodb connection
mongoose.connect(mongoURL)
const db = mongoose.connection

// define event listeners for database connection
db.on('connected',()=>{
    console.log("Connected to database")
})