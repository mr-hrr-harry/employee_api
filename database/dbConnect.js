const mongoose = require('mongoose')

mongoose.connect(process.env.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const con = mongoose.connection

con.on('open', ()=>{
    console.log("DB Connected Successfully!")
})