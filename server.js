//Dependencies
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets the Express App
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var app = express();
var PORT = process.env.PORT || 3036;

//Sets the Express aap to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

//Add application routes
require(path.join(__dirname,"./app/routing/apiRoutes"))(app);
require(path.join(__dirname,"./app/routing/htmlRoutes"))(app);

//Starts the server to begin listening
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});