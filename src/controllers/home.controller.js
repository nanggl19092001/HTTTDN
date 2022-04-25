
const DBConnection = require('../database')

class homeController {

    getProduct(req, res) {
        DBConnection.query('SELECT * FROM sanpham', (err, result)=> {
            if(err){
                console.log(err)
                res.send('ERROR')
            }
            else {
                res.render('index', {items:result, username: req.session.user})
            }
        })
    }

    getCart(req,res) {
        if(req.session.cart){
            let totalprice = 0
            for (const item of req.session.cart){
                totalprice += item.giasanpham
            }
            res.send(JSON.stringify({items: req.session.cart, total: totalprice}))
        }
        else{
            res.send('')
        }
    }

    addToCart(req,res) {
        req.session.cart.push({
            id: parseInt(req.body.id),
            tensanpham: req.body.tensanpham,
            giasanpham: parseInt(req.body.giasanpham),
            soluong: parseInt(req.body.soluong)}
        )
        req.session.save((err => {
            if(err) {
                res.status(403).send({msg: req.session.cart});
            }
            else{
                res.status(200).send({msg: req.session.cart});
            }
        }))
    }
    
}

module.exports = new homeController