var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/product/:x/:y', function(req, res) {
    var X = parseInt(req.params.x);
    var Y = parseInt(req.params.y);
    var prod =X*Y;
    prod = prod.toString();
  //  let jsonObj = { product: `${prod}` };
    res.json({ x: req.params.x,
      y: req.params.y ,product: prod});
//  res.send(jsonObj);
});

var server = app.listen(3001, function () {
    console.log("Listening on port %s...", server.address().port);

});