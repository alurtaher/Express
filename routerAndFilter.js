const express = require('express')
const app = express();
const PORT = 3000

app.get('/books',(req,res)=>{
    res.status(200).json(`Here is the list of books!`)
})


app.post('/books',(req,res)=>{
    res.status(201).json(`Book has been added!`)
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})