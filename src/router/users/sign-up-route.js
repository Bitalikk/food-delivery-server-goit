const path = require("path");
const fs = require("fs");
const bodyParser = require("../../bodyParser/bodyParser");

const signUpRoute = async (req, res) => {
  try {
    const user = await bodyParser(req);

    const { username } = user;
    const userPath = path.join(
      __dirname,
      "..",
      "..",
      "db",
      "users",
      `${username}.json`
    );

    fs.writeFile(userPath, JSON.stringify(user), err => {
      if (err) {
        console.error(err);
      }
    });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } catch (err) {
    console.error(err);
  }
};

module.exports = signUpRoute;
