var express = require("express");
var app = express();
var PORT = 3000;
// var fs = require("fs");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("./public"));


// require("./routes/images.js")(app);
//require("./routes/outfits.js")(app);

//app.get("/qr", function(req, res) {res.sendFile(path.join(__dirname, "../suites/qr.html"));});
app.post('/profile', function (req, res, next) {})

app.listen(3000, function() {
  console.log("App running on port "+ PORT);
});

