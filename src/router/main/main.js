const mainRoute = (request, response) => {
  response.writeHead(200, {
    "Content-type": "text/html"
  });

  response.write("<h1>Main products page</h1>");
  response.end();
}

module.exports = mainRoute;