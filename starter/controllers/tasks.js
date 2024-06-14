
/*

use asyncwrapper ,error handling, custome error handling in postman 

*/

const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

// const {createcustomError} = require('../errors/custom-error')

const {customApiError} = require('../errors/custom-error')

const getAlltask = asyncWrapper(async (req,res,next)=>{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})

const createtask = asyncWrapper(async (req,res,next)=>{
    const task = await Task.create(req.body)
    res.status(200).json({task})
})

const gettask = asyncWrapper(async (req,res,next)=>{
        const { id : taskID} = req.params
        const task = await Task.findOne({ _id : taskID})   
        if(!task){
            return next(new customApiError(`no task with ${taskID}`,404))
            
        //    return next(createcustomError(`no task with ${taskID}`,404))
        }  
        res.status(200).json({task})
})

const updatetask = asyncWrapper(async (req,res,next)=>{
        const {id : taskID} = req.params
        const task = await Task.findOneAndUpdate({_id : taskID},req.body,{
            new:true,   
            runValidators:true,
        })
        if(!task){
            return next(createcustomError(`no task with ${taskID}`,404))
        }
        res.status(200).json({task})
})

const deletetask = asyncWrapper(async (req,res,next)=>{
        console.log("hii");
        const {id:taskId} = req.params
        console.log(taskId);
        const task = await Task.findOneAndDelete({_id:taskId})      
        if(!task){
            return next(createcustomError(`no task with ${taskID}`,404))
        }
        return res.status(200).json({msg : "Success"})
})
module.exports = {getAlltask,createtask,gettask,updatetask,deletetask}


//without asyncwrapper custome error and error handling in postman


// const Task = require('../models/Task')

// const getAlltask = async (req,res)=>{
//     try {
//         const tasks = await Task.find({})
//         res.status(200).json({tasks})
//        } catch (error) {
//         res.status(500).json({msg : error})
//        }
// }

// const createtask = async (req,res)=>{
//    try {
//     const task = await Task.create(req.body)
//     res.status(200).json({task})
//    } catch (error) {
//     res.status(500).json({msg : error})
//    }
// }

// const gettask = async (req,res)=>{
//     try {
//         const { id : taskID} = req.params
//         const task = await Task.findOne({ _id : taskID})   
//         if(!task){
//             return res.status(404).json({msg : `no task with ${taskID}`})
//         }   
//         res.status(200).json({task})

//        } catch (error) {
//         res.status(500).json({msg : error})
//        }
// }

// const updatetask = async (req,res)=>{
    
//     try {
//         const {id : taskID} = req.params
//         const task = await Task.findOneAndUpdate({_id : taskID},req.body,{
//             new:true,   
//             runValidators:true,
//         })
//         if(!task){
//             return res.status(404).json({msg : `no id : ${taskID}`})
//         }
//         res.status(200).json({task})
//     } catch (error) {
//         res.status(500).json({msg : error})
//     }
        
// }
// const deletetask = async (req,res)=>{
//     try {
//         console.log("hii");
//         const {id:taskId} = req.params
//         console.log(taskId);
//         const task = await Task.findOneAndDelete({_id:taskId})      
//         if(!task){
//             return res.status(200).json({msg : "No id"})
//         }
//         return res.status(200).json({msg : "Success"})

//        } catch (error) {
//         res.status(500).json({msg :error})
//        }
// }
// module.exports = {getAlltask,createtask,gettask,updatetask,deletetask}