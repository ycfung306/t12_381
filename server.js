var express = require('express');
var app = express();

app.get("/rectangle/:l/:w", function(req,res) {
  var l = parseFloat(req.params.l);
  var w = parseFloat(req.params.w);
  var rectangle = {
    "length"	: l,
    "width"	: w,
    "perimeter"	: (l + w) * 2,
    "area"	: l * w
  };
  res.writeHead(200, {"Content-Type": "application/JSON"});
  res.end(JSON.stringify(rectangle));
});

app.get("/circle/:r", function(req, res) {
  var r = parseFloat(req.params.r);
  var circle = {
    "radius"	: r,
    "perimeter"	: 2 * Math.PI * r,
    "area"	: Math.PI * r * r
  };
  res.writeHead(200, {"Content-Type": "application/JSON"});
  res.end(JSON.stringify(circle));
});

app.listen(process.env.PORT || 8099);
