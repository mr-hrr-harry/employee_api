const mongoose = require('mongoose')

const schemaStructure = mongoose.Schema({
    employeeID:{
        type: String,
        required: true,
        unique: true,
    },
    employeeName:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    pendingWork:{
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('EmployeeData', schemaStructure)