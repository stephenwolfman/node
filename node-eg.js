// node-eg.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});


app.get('/MapImage', function(req, res) {

	var result = [{"MapImageId":4,"Lat":34.232158,"Long":-116.88715,"Desc":"Snow Summit","SentBy":"Wolfman","Comment":"Riding by myself, but not alone.","ImageUrl":"../images/WheresB/WB0004.jpg","VideoURL":null}];	
  res.send(result);
});

app.get('/param/:tagId', function(req, res) {
  res.send("tagId is set to " + req.param("tagId"));
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});