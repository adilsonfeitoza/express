

module.exports = (app) => {
    app.get('/products', (req, res) => {
        const connection = app.infra.connectionFactory()
        const productsDAO = new app.infra.productsDAO(connection)

        productsDAO.list((err, result) => {
            res.render('products/list', { books: result })
        })
        
        connection.end()
    })
}
