const express = require('express')
const {engine} = require('express-handlebars')

const port = 3000
const app = express()

const routes = require('./src/routes/index.route')

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

app.set('views', './src/views')

routes(app)

app.listen(port)