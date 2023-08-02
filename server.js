const express = require('express')
const app = express()

require('dotenv').config()
require('./database/dbConnect')

app.use(express.json())

app.use('/api/employee', require('./routerHandler/router'))

const port = process.env.port
app.listen(port, ()=> {
    console.log(`Server Started and listening on port ${port}!`);
})