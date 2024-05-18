const express = require('express')
const jwt = require('jsonwebtoken')
const person = express.Router()
const {jwtMiddleware} = require('./../jwt')
const Person = require('./../models/person')

person.post('/signup', async (req,res)=>{
        try{
            const data = req.body
            if (!data.name){
                return res.json({error: "Name is mandatory! "})
            }
            if (!data.password){
                return res.json({error: "Password  is mandatory! "})
            }
    
            // populate the new person with the sent data
            const newperson = new Person(data)
    
            // save the person to the database
            const response = await newperson.save()
            console.log("Data saved! ")
            res.json({response:response})
    
        }catch(err){
            console.log(err)
            res.json(err)
        }
    })

person.post('/login', async(req,res)=>{
    try{

    const {username,password} = req.body
    const user = await Person.findOne({name:username})

    if(!user || !(await user.comparePassword(password))){
        return res.status(401).json({error: "Incorrect username or password! "})
    }

    const payload = {
        id: user.id,
        username: user.name
    } 
    jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: '1h'},(err,token)=>{
        if(err) throw err
        res.cookie('token',token).json(user)
    })

    }catch(err){
        res.status(400).json({error: err})
    }
})

person.get('/profile', jwtMiddleware, async (req,res)=>{
    try{
    const userdata = req.user
    const userid = userdata.id
    const userbyid = await Person.findById(userid)

    res.status(200).json({userbyid})}
    catch(err){
        res.status(400).json({error: err})
    }
})

person.get('/', jwtMiddleware, async (req, res) => {
    try {
    
        const alldata = await Person.find();
    
        // Sending JSON response with all the data
        res.json({ success: true, data: alldata });
    } catch (err) {
        // Handling errors
        console.error("Error fetching data:", err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

module.exports = person