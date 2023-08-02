const express = require('express')
const app = express()

require('dotenv').config
require('./database/dbConnect')

app.use(express.json())

app.listen(process.env.PORT, ()=> {
    console.log("Server Started!");
})