const express = require("express");
const app = express();
const studentRoute = require('./routes/studentRoute.js')
const usersRoute = require('./routes/usersRoute.js')
const busRoute = require('./routes/busRoute.js')

app.use(express.json())
app.use('/student',studentRoute);
app.use('/users',usersRoute)
app.use('/buses',busRoute)

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});