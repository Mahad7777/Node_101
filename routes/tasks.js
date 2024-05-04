const express = require('express')
const tasks = express.Router()
const Task = require("./../models/Tasks")

tasks.post('/', async (req, res) => {
    try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
    } catch (error) {
    res.status(400).send(error);
    }
    });

tasks.get('/', async (req,res)=>{
    try{
        const alltasks = await Task.find()
        res.send(alltasks)
    }catch(err){
        res.send(err)
    }
})

module.exports = tasks