const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('This is our about page')
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find that page</p>
            <a href='/'>Back home</a>
        `)
    }
})

server.listen(5000)