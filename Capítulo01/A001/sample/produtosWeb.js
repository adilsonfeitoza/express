const http = require('http')

http.createServer((req, res) => {
    res.end('<html><body><marquee><h3>Listagem de produtos</h3></marquee></body></html>')
}).listen(3000, 'localhost')

console.log('Server is running')