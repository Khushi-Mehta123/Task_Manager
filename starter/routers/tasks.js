/*
Put : Update the content with pass new content if not exists then create that
Patch : only update the existing content
*/

const express = require('express')

const app=express()
const router = express.Router()

const {getAlltask,createtask,gettask,updatetask,deletetask} = require('../controllers/tasks')

router.route('/').get(getAlltask).post(createtask)

router.route('/:id').get(gettask).patch(updatetask).delete(deletetask)

// router.get('/',createtask)


module.exports = router