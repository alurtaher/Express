const express = require("express");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World ");
});

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
const createUsersTable = `create table Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
)`;

//This function will execute the creationQuery
connection.execute(createUsersTable, (err) => {
  if (err) {
    console.log(err);
    connection.end();
  }
  console.log("Users Table is created ");
});

// Create Buses table
const createBusesTable = `
  CREATE TABLE IF NOT EXISTS Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(100),
    totalSeats INT,
    availableSeats INT
)
`;

connection.query(createBusesTable, (err, result) => {
  if (err) {
    console.log(err);
    connection.end();
  }
  console.log("Buses table is created");
});

// Create Bookings table
const createBookingsTable = `
  CREATE TABLE IF NOT EXISTS Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
)
`;

connection.query(createBookingsTable, (err, result) => {
  if (err) {
    console.log(err);
    connection.end();
  }
  console.log("Bookings table is created");
});

// Create Payments table
const createPaymentsTable = `
  CREATE TABLE IF NOT EXISTS Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid DECIMAL(10, 2),
    paymentStatus VARCHAR(100)
)
`;

connection.query(createPaymentsTable, (err, result) => {
  if (err) {
    console.log(err);
    connection.end();
  }
  console.log("Payments table is created");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});