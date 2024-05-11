
const express = require('express')
const app = express()
const db = require("./db")
const passport = require('./auth')

// to convert the json data to an object
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//middleware function
// const middle = (req,res,next)=>{
//     console.log("Middle ware used! ")
//     next()
// }
// app.use(middle)

app.use(passport.initialize())
const middlewareAuth = passport.authenticate('local',{session:false})

app.get('/', (req,res)=>{
    res.json("Welcome to learning node.js")
})

// import router files
const taskRoutes = require('./routes/tasks')
app.use('/tasks', taskRoutes)

const menuitemRoutes = require('./routes/menuitem')
app.use('/menuitem', menuitemRoutes)

const personRoutes = require('./routes/person')
app.use('/person',personRoutes)


app.listen(3001,()=>{
    console.log('port is running on port 3001! ')
})

