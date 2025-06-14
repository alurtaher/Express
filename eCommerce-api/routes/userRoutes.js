const express = require('express')
const Router = express.Router();
const {fetchUsers,fetchUserById,addNewUser} = require('../controllers/userController.js')

Router.get('/',fetchUsers)

Router.get('/:id',fetchUserById)

Router.post('/',addNewUser)

module.exports = Router;