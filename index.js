const http = require('http');
const fs = require('fs');
const path = require('path');
const { port } = require('./src/config');

const server = http.createServer((request, response) => {
  console.log('works');
})

server.listen(port);
console.log('server is running');
