const {ConectionMongo} = require('./db/connect')
const dotenv = require('dotenv').config()
const express = require ('express')
const app = express()

const tasks = require ('./routes/tasks')

ConectionMongo()

//routes
app.use('/api/v1/tasks', tasks)

const port= 3000

app.listen(port, console.log(`Server is listening on port ${port}`))

