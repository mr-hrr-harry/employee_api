const express = require('express')
const app = express()

require('dotenv').config()
require('./database/dbConnect')

app.use(express.json())

const port = process.env.port
app.listen(port, ()=> {
    console.log(`Server Started and listening on port ${port}!`);
})