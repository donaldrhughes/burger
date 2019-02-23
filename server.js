/*Overview
use Node and MySQL to query and route data in your 
app, and Handlebars to generate your HTML.*/

// var mysql = require("mysql");
var express = require("express");
// var connection = require("./config/connection");
var exphbs = require("express-handlebars");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
var routes = require("./controllers/burgers_controller");

app.use(routes);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});