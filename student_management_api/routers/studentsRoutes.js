const express = require('express')
const router = express.Router()
const controller = require('../controller/studentController.js')

router.get('/',controller.allStudentsData)
router.post('/',controller.addNewStudent)
router.get('/:id',controller.getStudentDataById)
router.put('/:id',controller.updateStudentDataById);
router.delete('/:id',controller.deleteStudentById)

module.exports = router;