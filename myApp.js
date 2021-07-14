var express = require('express');
var app = express();

var port = 3000

const consoleLog = "<script>console.log('Hello World')</script>"

app.get('/', (req, res) => {
  res.send(consoleLog)
})

app.listen(port, () => {
  console.log("Starting up!")
})

























// module.exports = app;
