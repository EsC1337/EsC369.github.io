var express = require("express");
var app = express();

//SVG Title Icon - Favicon Middleware:
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/favicon.png'));

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/static"));

// app.set('view engine', 'ejs');
app.get("/", function(req, res) {
  res.render("index");
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});



