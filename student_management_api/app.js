const express = require("express");
const app = express();
const studentRoute = require('./routers/studentsRoutes.js')

app.use(express.json())
app.use('/students',studentRoute)

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});