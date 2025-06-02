// Create Your Own Middleware and Routing
const express = require('express')
const app = express();

//Created the middleware
const middleware = (req,res,next)=>{
    req.user = 'Guest'
    next();
}

app.get('/welcome',middleware,(req,res)=>{
    res.status(200).set('Content-Type', 'text/html');
    res.send(`<h1>Welcome, ${req.user} !</h1>`)
})

//The server is listening on the port 3000
app.listen(3000)