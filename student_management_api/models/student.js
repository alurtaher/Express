const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/dbconnection')

const students = sequelize.define('students',{
    id:{
        type :DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey : true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type : DataTypes.STRING,
        allowNull:false
    }   
})

module.exports = students;