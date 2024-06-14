
const mongoose = require('mongoose')

// const connectionstring = 
// 'mongodb://localhost:27017/Proj_1'

const connectDB = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser : true,
    })
}

module.exports = connectDB
