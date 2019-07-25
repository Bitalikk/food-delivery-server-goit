const fs = require('fs');
const path = require('path');

const productsRoute = (request, response) => {
  if (request.method === 'GET' && request.url.includes('products')) {
    const productsFilePath = path.join(__dirname, '..', '..', 'db', 'products', 'all-products.json');
    const products = fs.readFileSync(productsFilePath);

    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    response.write(products);
    response.end();
    return;
  };
};

module.exports = productsRoute;
