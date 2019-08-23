const http = require('http');
const requestHendler = require('./requestHendler/requestHendler');

const router = require('./router/router');

const startServer = port => {
  const server = http.createServer(requestHendler)
  
  server.listen(port, err => {
    console.log(`Server listen port ${port}`)
  });
}

module.exports = startServer;