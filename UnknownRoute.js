const express = require('express');
const app = express();
app.use(express.json());
const PORT = 4000;

app.get('/orders', (req, res) => {
  res.send('Here is the list of all products');
});

app.post('/orders', (req, res) => {
  res.send('A new product has been added.');
});

app.get('/users', (req, res) => {
  res.send('Here is the list of all categories.');
});

app.post('/users', (req, res) => {
  res.send('A new category has been created.');
});

//WildCard Route for handling all the routes other than /users,/orders
app.all('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 