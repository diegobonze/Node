const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/hmtl' }); // Esse é o corpo
    res.end('<h1>Hello, world!</h1>'); // o que vai ser enviado dentro do corpo ( Content-Type )
});

server.listen(3000, () => console.log('Server started at http://localhost:3000'));