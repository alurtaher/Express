const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/users',userRoutes);
app.use('/buses',busRoutes);

// Sync DB and start server
sequelize.sync({ force: false }).then(() => {
  console.log("Database Connected");
  app.listen(3000, () => console.log("Server running on port 3000"));
});