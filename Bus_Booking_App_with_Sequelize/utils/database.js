const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv')
dotenv.config();

const sequelize = new Sequelize( process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {sequelize,DataTypes};