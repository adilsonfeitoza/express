const mysql = require('mysql')

createDBConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'nodejs'
    })
}

//wrapper
module.exports = () => {
    return createDBConnection
}