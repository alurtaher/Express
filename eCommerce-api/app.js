const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const path = require("path");
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

//Sending the HTML File
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "view", "product.html"));
// });

app.get('/api/products',(req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'produc.html'));
})

app.post('/api/products',(req, res) => {
  const { productName } = req.body;
  console.log('Received Product:', productName);
  res.json({ message: 'Product received successfully', product: productName });
})

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));