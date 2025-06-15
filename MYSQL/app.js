const express = require('express')
const app = express();
const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

app.get('/',(req,res)=>{
    res.send('Hello World ')
})

//Creating the connection with mysql
const connection = mysql.createConnection({
    host:'localhost',
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})

//Making the connection with mysql
connection.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("Mysql is connected")
})

//This query will create the table with the name as student
const creationQuery = `create table student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
)`

//This function will execute the creationQuery
connection.execute(creationQuery,(err)=>{
    if(err){
        console.log(err)
        connection.end()
    }
    console.log("Table is created Successfully")
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})