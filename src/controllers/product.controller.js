const DBConnection = require('../database')

class productController{

    getProduct(req,res) {
        let ID = req.params.ID
        DBConnection.query(`SELECT * FROM sanpham WHERE id=${ID}`, (err, result)=> {
            if(err){
                console.log(err)
                res.send('ERROR')
            }
            else {
                res.render('product', {item:result})
            }
        })
    }
}

module.exports = new productController