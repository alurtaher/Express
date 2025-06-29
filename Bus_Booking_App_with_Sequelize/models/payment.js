const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Payment = sequelize.define('Payment', {
  amount: DataTypes.FLOAT,
  paymentMethod: DataTypes.STRING,
});

module.exports = Payment;