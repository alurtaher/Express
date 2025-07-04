const express = require("express");
const app = express();
const studentRoute = require("./routers/studentsRoutes.js");
const db = require("./utils/dbconnection.js");
const courseRoute = require('./routers/courseRoutes.js')
require('./models')
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.use("/student", studentRoute);
app.use('/courses',courseRoute)

db.sync({force:false})
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => console.log(err));