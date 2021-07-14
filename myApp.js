var express = require('express');
var app = express();

var port = 80

app.get('/', (req, res) => {
  res.send(console.log("Hello World"))
})

app.listen(port, () => {
  console.log("Starting up!")
})

























// module.exports = app;
