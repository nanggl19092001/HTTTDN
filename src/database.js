const database = require('mysql')

const config = {
    connectionLimit : 10,
    host: '127.0.0.1',
    user: 'root',
    password: null,
    database: 'coffeeshop',
    debug: false
}

const connection = database.createPool(
    config
)

module.exports = connection