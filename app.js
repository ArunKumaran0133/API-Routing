const express = require("express");
const Express = express();

Express.get("/", (request, response) => {
  response.send("Home Page");
});

Express.get("/about", (request, response) => {
  response.send("About Page");
});

Express.listen(3000);

module.exports = Express;
