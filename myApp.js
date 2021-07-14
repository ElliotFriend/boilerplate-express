var express = require('express');
var app = express();

// 1. Meet the Node Console
// console.log("Hello World")

// 2. Start a Working Express Server
// app.get('/', (req, res) => {
//   res.send('Hello Express')
// })

// 3. Serve an HTML File
const options = {
  root: __dirname,
}
app.get('/', (req, res) => {
  res.sendFile("views/index.html", options)
})



















module.exports = app;
