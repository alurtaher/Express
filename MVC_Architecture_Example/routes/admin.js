const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const {addProductGet,addProductPost} = require('../controller/admin.js')

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', addProductGet);

// /admin/add-product => POST
router.post('/add-product', addProductPost);

exports.routes = router;
exports.products = products;
