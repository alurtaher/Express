const { sequelize,DataTypes } = require('sequelize');
// const sequelize = require('../utils/database.js');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = User;