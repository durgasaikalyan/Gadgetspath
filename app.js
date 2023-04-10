const express = require("express");
const app = express();
const path = require("path");

app.get("/gadgets", (request, response) => {
  response.sendFile(path.join(__dirname, "gadgets.html"));
});

module.exports = app;
