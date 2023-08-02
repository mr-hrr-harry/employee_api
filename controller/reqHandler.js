const Employee = require('../model/struct')

//Action: SelectAll
//Method: find()
//URL: GET: /api/employee/

const selectAll = async(req, res)=>{
    try{
        const data = await Employee.find();
        data.length!=0 ? res.json(data) : res.send("DB empty! No Employee data Exists!")
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
    try{
        const {employeeID, emplyeeID, gender, pendingWork} = req.body
        if(!employeeID || !emplyeeID || !gender ||  !pendingWork){
            console.log('Insufficient or Incorrect Data!')
            return
        }

        const data = await Employee.create({
            employeeID, emplyeeID, gender, pendingWork
        })

        await data.validate().save()
        res.json({"Status" : "Successul Insertion!\n"}, data)
    }
    catch(err){

    }
}

const updateOne = async(req, res)=>{

}

const deleteOne = async(req, res)=>{

}

module.exports = {selectAll, selectOne, insertOne, updateOne, deleteOne}