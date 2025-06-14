const express = require('express');
const app = express();
const PORT = 3000;

const productRoutes = require('./routes/productRoutes');

app.use(express.json()); // for parsing JSON body
app.use('/', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
