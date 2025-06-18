const express = require('express')
const router = express.Router();
const studentController = require('../controller/studentController.js')

router.post('/add',studentController.addData)
router.post('/update/:id',studentController.updatingData)
router.get('/delete/:id',studentController.deletingData)

module.exports = router;