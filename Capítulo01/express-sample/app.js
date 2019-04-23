const app = require('./config/express')
const routesProducts = require('./app/routes/products')(app)

app.listen(3000, (req, res) => {
    console.log('server is running')
})