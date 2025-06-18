const connection = require('../utils/dbconnection.js')
const addData = (req,res)=>{
    const {name,email} = req.body;
    
    //Query for inserting the into the student table
    const createInsertQuery = `Insert into student (name,email) VALUES (?,?)`

    connection.execute(createInsertQuery,[name,email],(err)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(`${name} has been added Successfully`)
        res.status(201).send(`${name} has been added Successfully`)
    })
}

const updatingData = (req,res)=>{
    const {id} = req.params
    const {name} = req.body;

    //Query to update into the student table
    const updateQuery = `update  student set name = ? WHERE id = ?`

    connection.execute(updateQuery,[name,id],(err,result)=>{
        if(err){
            console.log(err)
            res.status(400).send(err.message)
            return;
        }
        if(result.affectedRows === 0){
            return res.status(404).send(`Student not found`)
        }
        console.log(`${name} has been updated Successfully`)
        return res.status(200).send(`${name} has been updated Successfully`)
    })
}

const deletingData = (req,res)=>{
    const {id} = req.params;

    //Query to delete the data from the student Table
    const deleteQuery = `delete from student where id = ?`

    connection.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err)
            res.status(400).send(err.message)
            return;
        }
        if(result.affectedRows === 0){
            return res.status(404).send(`Student not found`)
        }
        console.log(`${id} has been deleted Successfully`)
        return res.status(200).send(`${id} has been deleted Successfully`)
    })
}

module.exports = {
    addData,
    updatingData,
    deletingData
}