const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/dbconnection')

const studentCourses = sequelize.define('studentCourses',{
    id:{
        type :DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey : true
    }
})

module.exports = studentCourses;