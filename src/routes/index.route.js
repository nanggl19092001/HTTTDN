const homeRouter = require('./home.router')
const productRouter = require('./product.router')
function routes(app){
    console.log('something')

    app.use('/product', productRouter)

    
    app.use('/',homeRouter)
    
}

module.exports = routes