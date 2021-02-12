"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.HTTP_PORT || 4001;
var app = (0, _express["default"])(); //Serve static files from client

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build'))); //API

app.get("/", function (req, res) {
  res.send("just gonna send it");
});
app.get("/flower", function (req, res) {
  res.json({
    name: "Dandelion",
    colour: "Blue-ish"
  });
}); //SERVER

app.listen(PORT, function () {
  console.log("This herehere Server listening at port ".concat(PORT, "."));
});
