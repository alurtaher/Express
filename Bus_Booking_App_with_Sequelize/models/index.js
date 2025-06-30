const { sequelize, DataTypes } = require("../utils/database");

const User = require("./user")(sequelize, DataTypes);
const Bus = require("./bus")(sequelize, DataTypes);
const Booking = require("./booking")(sequelize, DataTypes);

// Associations
User.hasMany(Booking);
Booking.belongsTo(User);

Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports = { sequelize, User, Bus, Booking };