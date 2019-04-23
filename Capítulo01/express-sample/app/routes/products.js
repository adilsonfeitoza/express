

module.exports = (app) => {
    app.get('/products', (req, res) => {
        const connection = app.infra.connectionFactory()

        connection.query('select * from book', (err, result) => {
            res.render('products/list', { books: result })
        })
        
        connection.end()
    })    
}
