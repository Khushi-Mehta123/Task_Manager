
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"complusory"],
        trim :true,
        maxlength : [20 , 'Must be only 20 characters'],
    },
    completed : {
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('Task',TaskSchema)