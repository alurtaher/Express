const express = require('express')
const app = express();
const PORT = 3000
const studentRouter = require('./routes/studentroute.js')
const courseRouter = require('./routes/courseroute.js')


app.get('/', (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

app.use('/students', studentRouter);
app.use('/courses', courseRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT,()=>{
    console.log(`Server is Listening on ${PORT}`)
})