const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/dbconnection')

const IdentityCard = sequelize.define('identitycard',{
    id:{
        type :DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey : true,
        allowNull:false
    },
    cardNo:{
        type :DataTypes.INTEGER,    
        unique:true,
        allowNull:false
    }
})

module.exports = IdentityCard;