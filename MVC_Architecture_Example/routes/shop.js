const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const {getData} = require('../controller/shop.js')

const router = express.Router();

router.get('/', getData);

module.exports = router;
