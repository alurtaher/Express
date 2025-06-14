const express = require('express');
const app = express();
app.use(express.json());
const PORT = 4000;

app.get('/',(req,res)=>{
  res.send('This is the Home Page')
})

app.get('/welcome/:username',(req,res)=>{
  const username = req.params.username;
  const role = req.query.role;
  res.send(`Welcome ${username},Your role is ${role}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 