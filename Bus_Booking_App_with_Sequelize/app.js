const express = require("express");
const app = express();
const { sequelize } = require("./models");
require("dotenv").config();

app.use(express.json());

// Routes
app.use(require("./routes/userRoutes"));
app.use(require("./routes/busRoutes"));
app.use(require("./routes/bookingRoutes"));

// Sync Database
sequelize.sync({ force: true }).then(() => {
  console.log("Database synced.");
// Start Server
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});