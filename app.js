require('dotenv').config()
const express = require('express')
const app = express()
const task = require('./starter/routers/tasks');
const middleware = require('./starter/middleware/not-found')
const connectDB =  require('./starter/db/connection')
const errorhandlerMiddleware = require('./starter/middleware/errorhandler')

app.use(express.static('./public'))
app.use(express.json()); 

app.use('/api/v1/tasks',task)
app.use(middleware)
app.use(errorhandlerMiddleware)

const port = process.env.PORT || 3000

console.log(`PORT: ${process.env.PORT}`);
const start = async() => {
    try {
        console.log(process.env.MONGO_URI)
        await connectDB(process.env.MONGO_URI)
        console.log("Connected");
        app.listen(port,()=>{
            console.log(`Server listening on port ${port}...`);
        })

    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}
start()
