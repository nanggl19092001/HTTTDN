function routes(app){

    app.use('/',(req,res)=>{
        res.render('index')
    })
}

module.exports = routes