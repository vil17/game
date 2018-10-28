 const express = require("express");
const path = require("path");
const app = express();
//const api = require("./api/index");
const game = require("./api/index"); //herna var eg að profa gera nkl sama fyrir þessa game skrá bara til að prófa mig áfram

// Serve static files
app.use(express.static(path.join(__dirname, "../", "dist")));
//app.use(express.static(__dirname + "dist"));
// Use the API router
//app.use("/api", api);
app.use("/game", game); //test varðandi game skrá

// Catch all other requests
app.get("/", (req, res) => {
  res.status(200).sendFile('index.html');
});

// Prettify the JSON responses (from the API)
app.set("json spaces", 2);

module.exports = app;