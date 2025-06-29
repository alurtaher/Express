const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/dbconnection')

const department = sequelize.define('department',{
    id:{
        type :DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey : true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING
    }
})

module.exports = department