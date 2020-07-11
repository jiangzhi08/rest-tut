const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
const postroute = require('./routes/posts')
app.use('/posts',postroute)


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log('connenct to db')
})

app.listen(3000)

