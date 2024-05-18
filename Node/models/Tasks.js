const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        enum: ['High','Medium','Low'],
        default: 'Medium'
    },
    dueDate:{
        type: Date,
        required: true
    }
})

const TaskModel = mongoose.model('Task',taskSchema)
module.exports= TaskModel