const express = require('express')
const courseRouter = express.Router();
const {allcourses,courseDetailById} = require('../controller/courses.js')

courseRouter.get('/', allcourses);

courseRouter.get('/:id', courseDetailById);

module.exports = courseRouter;