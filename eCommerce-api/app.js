const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const cartRoutes = require('./routes/cartRoutes.js');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);



const PORT =3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));