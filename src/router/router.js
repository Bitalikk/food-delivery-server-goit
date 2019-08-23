const mainRoute = require('./main/main');
const productsRoute = require('./products/products');
const signUpRoute = require('./users/sign-up-route');

const router = {
  getProducts: {
    '/': mainRoute,
    '/products': productsRoute,
  },
  createUser: {
    '/signup': signUpRoute,
  }
};

module.exports = router;