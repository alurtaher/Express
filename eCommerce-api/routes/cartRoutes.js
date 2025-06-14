const express = require('express')
const Router = express.Router();
const {fetchUsers,addProduct} = require('../controllers/cartController.js')

Router.get('/:id',fetchUsers)

Router.post('/:id',addProduct)

module.exports = Router;