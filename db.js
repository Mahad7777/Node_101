const mongoose = require("mongoose")
require('dotenv').config() 
// const mongoURL = 'mongodb://localhost:27017/subscribers'
const mongoURL = process.env.DB_URL

// setup mongodb connection
mongoose.connect(mongoURL)
const db = mongoose.connection

// define event listeners for database connection
db.on('connected',()=>{
    console.log("Connected to database")
})