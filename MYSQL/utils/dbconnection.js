const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

//Creating the connection with mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

//Making the connection with mysql
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Mysql is connected");
});

//This query will create the table with the name as Users
const createUsersTable = `create table IF NOT EXISTS student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
)`;

//This function will execute the createUsersTable
connection.execute(createUsersTable, (err) => {
  if (err) {
    console.log(err);
    connection.end();
  }
  console.log("student Table is created ");
});

module.exports = connection;