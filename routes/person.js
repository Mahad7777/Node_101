const express = require('express')
const person = express.Router()

const Person = require('./../models/person')

person.post('/', async (req,res)=>{
        try{
            const data = req.body
    
            // populate the new person with the sent data
            const newperson = new Person(data)
    
            // save the person to the database
            const response = await newperson.save()
            console.log("Data saved! ")
            res.json(response)
    
        }catch(err){
            console.log(err)
            res.json(err)
        }
    })

person.get('/', async (req, res) => {
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