const path = require('path');
const fs = require('fs');

const productsPath = path.join(__dirname, '..', '..', 'db', 'products', 'all-products.json');

const productsRoute = (req, res) => {
  fs.open(productsPath, "r", (err, fd) => {
    fs.readFile(fd, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    })
  })
}

module.exports = productsRoute;