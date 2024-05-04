const express = require('express')
const app = express()
const db = require("./db")

// to convert the json data to an object
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// import router files
const taskRoutes = require('./routes/tasks')
app.use('/tasks', taskRoutes)

const menuitemRoutes = require('./routes/menuitem')
app.use('/menuitem', menuitemRoutes)

const personRoutes = require('./routes/person')
app.use('/person', personRoutes)


app.listen(3001,()=>{
    console.log('port is running on port 3001! ')
})

