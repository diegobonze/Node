const users = require('../mocks/users')

module.exports = {
  listUsers(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" }); // Esse é o corpo
    res.end(JSON.stringify(users)); // o que vai ser enviado dentro do corpo ( Content-Type )
  }
} 