const express = require('express')
const router = express.Router();
const busController = require('../controller/busController.js')

router.get('/available/:seats',busController.seatsAvailable);
router.post('/',busController.addNewBus);

module.exports = router;