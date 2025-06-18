const express = require("express");
const app = express();
const connection = require('./utils/dbconnection.js')
const studentRoute = require('./routes/studentRoute.js')

app.use(express.json())
app.use('/student',studentRoute);

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});