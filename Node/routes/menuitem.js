const express = require('express')
const menuitem = express.Router()
const MenuItem = require('./../models/Menu_item')

menuitem.post("/", async (req,res)=>{
    try{
        const data = req.body
        const newitem = new MenuItem(data)
        const response = await newitem.save()

        console.log("data saved! ")
        res.status(200).json(response)
    }catch(err){
        res.json({"error":err}).status(400)
    }
})

menuitem.get("/", async(req,res)=>{
    const allItems = await MenuItem.find()
    console.log('Data fetched! ')
    res.send(allItems)
})

module.exports = menuitem