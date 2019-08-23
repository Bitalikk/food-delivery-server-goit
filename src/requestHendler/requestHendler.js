const router = require("../router/router");

module.exports = function(req, res) {
  if (req.method === 'GET') {
    router.getProducts[req.url](req, res);
  }

  if (req.method === 'POST') {
    router.createUser[req.url](req, res);
  }
};
