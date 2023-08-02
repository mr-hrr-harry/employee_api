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

//Action: Select One
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

//Action: Insert One
//Method: create(), validate(), 'save()'
//URL: PUT: /api/employee/<emplyeeID> (or) POST

const insertOne = async(req, res)=>{
    try{
        let {employeeID, employeeName, gender, pendingWork} = req.body
        if(!employeeID || !employeeName || !gender){
            console.log('Insufficient or Incorrect Data!')
            res.send('Insufficient or Incorrect Data!')
        }
        pendingWork = pendingWork ? pendingWork : false

        if(await Employee.findOne({employeeID: employeeID})){
            res.json({'Note' : 'Oops! Employee ID taken already!'})
        }
        else{
            const data = await Employee.create({
                employeeID, employeeName, gender, pendingWork
            })

            await data.validate()
            let dataCopy = await data.save()

            res.json(dataCopy)
        }   
    }
    catch(err){
        console.log("Error:\n"+err);
    }
}

const updateOne = async(req, res)=>{

}

//Action: Delete Employee
//Method: deleteMany()
//URL: DELETE: /api/employee/<emplyeeID>

const deleteEmployee = async(req, res)=>{        // delete one user

}

module.exports = {selectAll, selectOne, insertOne, updateOne, deleteEmployee}