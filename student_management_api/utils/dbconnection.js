const dotenv = require("dotenv");
dotenv.config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.database,process.env.user,process.env.password,{
    host: "localhost",
    dialect: "mysql",
  });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;

/*const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

//Creating the connection with mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
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
    email VARCHAR(50) unique,
    age INT 
)`;

//This function will execute the createUsersTable
connection.execute(createUsersTable, (err) => {
  if (err) {
    console.log(err);
    connection.end();
  }
  console.log("student Table is created ");
});

module.exports = connection;*/
