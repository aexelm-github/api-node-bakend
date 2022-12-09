
const express = require('express')
const jwt = require('jsonwebtoken')
var cors = require('cors')
require('dotenv').config()
const routes = require('./routes/routes')

const app = express()

app.use(express.json())
//
app.use(express.json({limit: '100mb'}));
//
app.use('/api-server',cors(),routes)

app.listen(process.env.APP_PORT, () => {
    console.log("Server on Port : "+process.env.APP_PORT+" now")
})