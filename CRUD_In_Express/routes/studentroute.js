const express = require('express')
const Router = express.Router()
const {allStudents,findById}= require('../controller/student.js')

Router.get('/', allStudents);

Router.get('/:id', findById);

module.exports = Router;