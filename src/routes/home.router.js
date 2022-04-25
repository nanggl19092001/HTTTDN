const express = require('express')

const homeController = require('../controllers/home.controller')
const Router = express.Router()

Router.get('/cart', homeController.getCart)
Router.post('/cart', homeController.addToCart)
Router.get('/', homeController.getProduct)

module.exports = Router