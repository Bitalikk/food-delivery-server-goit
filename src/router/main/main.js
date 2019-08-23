const path = require('path');
const fs = require('fs');

const mainRoute = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is main page</h1>");
}

module.exports = mainRoute;