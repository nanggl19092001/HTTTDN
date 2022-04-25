const express = require('express')
const {engine} = require('express-handlebars')

const path = require('path')
const bodyParser = require('body-parser')
const port = 3000
const app = express()

const session = require('express-session')

const fetch = require('node-fetch')

const DBConnection = require('./database')


DBConnection.getConnection((err, connection) => {
    if (err) {
        connection.release()
        console.log(err)
    }
    else {
        connection.release()
        console.log('DB connected')
    }
})

const routes = require('./routes/index.route')

const { dirname } = require('path')

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

app.set('views', './src/views')

app.use(session({
    secret: 'some secret',
    saveUninitialized: true,
    resave: false,
    secure: false,
    maxAge: 600000
}))

app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use('/script', express.static(path.join(__dirname, './public/script')))

app.use('/img', express.static(path.join(__dirname, './public/img')))

app.use('/css', express.static(path.join(__dirname, './public/css')))

app.use((req,res,next) => {
    req.session.user = 'test'
    req.session.cart = [{id: 1, tensanpham: 'nuoccam', giasanpham: 10000, soluong: 3},{id:2, tensanpham: 'nuocchanh', giasanpham: 20000, soluong: 1}]

    next()
})

routes(app)

app.listen(port,(err)=>{
    if(err) {
        console.log(err)
    }
    else{
        console.log('Server up at https://localhost:'+port)
    }
})