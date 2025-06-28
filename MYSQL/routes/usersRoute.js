const express = require('express')
const router = express.Router();
const userController = require('../controller/usersController.js')

router.get('/',userController.getAllUsers);
router.post('/',userController.addNewUser);

module.exports = router;