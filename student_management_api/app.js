const express = require("express");
const app = express();
const studentRoute = require("./routers/studentsRoutes.js");
const db = require("./utils/dbconnection.js");
const {studentModel} = require('./models/student.js')

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.use("/students", studentRoute);

db.sync({force:true})
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => console.log(err));