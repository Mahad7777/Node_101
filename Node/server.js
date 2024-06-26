
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const db = require("./db")
const passport = require('./auth')
const cors = require('cors');

// Initialize CORS middleware
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:5173'
};
const corsMiddleware = cors(corsOptions);

// Use CORS middleware in the router
app.use(corsMiddleware);

// to convert the json data to an object
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))


// import router files
const mainroute = require('./routes/main')
app.use('/', mainroute)

const taskRoutes = require('./routes/tasks')
app.use('/tasks', taskRoutes)

const menuitemRoutes = require('./routes/menuitem')
app.use('/menuitem', menuitemRoutes)

const personRoutes = require('./routes/person')
app.use('/person',personRoutes)


app.listen(3001,()=>{
    console.log('port is running on port 3001! ')
})

