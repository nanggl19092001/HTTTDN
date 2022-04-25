const express = require('express')

const productController = require('../controllers/product.controller')
const router = express.Router()

router.get('/:ID', productController.getProduct)

module.exports = router