var http = require("http");
var express = require("express");

var app = express();
var server = http.createServer(app);

app.set("view engine", "vash");

app.get("/", function(req, res) {
    res.render("index", {});
});

server.listen(5000);



