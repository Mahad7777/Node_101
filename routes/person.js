const express = require('express')
const person = express.Router()
const {jwtMiddleware, generateToken} = require('./../jwt')
const Person = require('./../models/person')

person.post('/signup', async (req,res)=>{
        try{
            const data = req.body
    
            // populate the new person with the sent data
            const newperson = new Person(data)
    
            // save the person to the database
            const response = await newperson.save()
            console.log("Data saved! ")

            const payload = {
                id : response.id,
                username : response.name

            }
            // console.log(JSON.stringify(payload))
            const token = generateToken(payload)
            // console.log("Token: ", token)
            res.json({response:response, token: token})
    
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
        return res.status(401).json({message: "Incorrect username or password! "})
    }

    const payload = {
        id: user.id,
        username: user.name
    } 
    const token =  generateToken(payload)
    res.json({token})
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