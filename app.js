

const express = require ('express')
const app = express()
const tasks = require ('./routes/tasks')
const {ConectionMongo} = require('./db/connect')
require('dotenv').config()
// const notFound = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');




//Middleware

app.use(express.static('./public'))
app.use(express.json());


//routes
app.use('/api/v1/tasks', tasks)
// app.use(notFound);
// app.use(errorHandlerMiddleware);

const port= process.env.PORT || 5000

ConectionMongo()
app.listen(port, console.log(`Server is listening on port ${port}`))

