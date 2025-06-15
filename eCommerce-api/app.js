const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const path = require("path");

app.use(express.json());

//Sending the HTML File
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "view", "product.html"));
// });

app.get('/api/products',(req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'product.html'));
})

app.post('/api/products',(req,res)=>{
  return res.json({msg:"Data Received Successfully",success:true})
})

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
