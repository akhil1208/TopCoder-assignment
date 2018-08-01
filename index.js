var express = require ("express");
var app = express();
var port = process.env.PORT || 3000;
var s=10;
var t=20;
app.get("/", function(req,res) {
	res.send(s+t);
});

app.listen(port);
