const Employee = require('../model/struct')

//Action: SelectAll
//Method: find()
//URL: GET: /api/employee/

const selectAll = async(req, res)=>{
    try{
        const data = await Employee.find();
        data ? res.json(data) : res.send("No Employee data Exists!")
    }
    catch(err){
        console.log("Error:\n" + err);
    }
}

//Action: SelectOne
//Method: findOne()
//URL: GET: /api/employee/<emplyeeID>

const selectOne = async(req, res)=>{
    try{
        const data = await Employee.findOne({employeeID : req.params.eID})
        data ? res.json(data) : res.send('No such employee exists!')
    }
    catch(err){
        console.log("Error:\n" + err)
    }
}

const insertOne = async(req, res)=>{

}

const updateOne = async(req, res)=>{

}

const deleteOne = async(req, res)=>{

}

module.exports = {selectAll, selectOne, insertOne, updateOne, deleteOne}