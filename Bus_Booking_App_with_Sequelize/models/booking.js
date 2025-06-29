const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Booking = sequelize.define('Booking', {
  seatNumber: DataTypes.INTEGER,
});

module.exports = Booking;