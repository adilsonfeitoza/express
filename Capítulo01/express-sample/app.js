const app = require('./config/express')()

app.listen(3000, (req, res) => {
    console.log('server is running')
})