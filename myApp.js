var express = require('express');
var app = express();
const bodyParser = require('body-parser');

// 7. Implement a Root-Level Request Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

// 11. Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended: false}))

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
  res.sendFile('views/index.html', options)
})

// 4. Serve Static Assets
app.use('/public', express.static(__dirname + '/public'))

// 5. Serve JSON on a Specific Route
// app.get('/json', (req, res) => {
//   res.json({"message": "Hello json"})
// })

// 6. Use the .env File
// require('dotenv').config()
let messageText = "Hello json"
// messageText = process.env.MESSAGE_STYLE == "uppercase" ? messageText.toUpperCase() : messageText
messageText = process.env['MESSAGE_STYLE'] == "uppercase" ? messageText.toUpperCase() : messageText
app.get('/json', (req, res) => {
  res.json({"message": messageText})
})

// 8. Chain Middleware to Create a Time Server
app.get('/now', (req, res, next) => {
  req.time = Date().toString()
  next()
}, (req, res) => {
  res.json({"time": req.time})
})

// 9. Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res) => {
  res.json({"echo": req.params.word})
})

// 10. Get Query Parameter Input from the Client
app.route('/name')
  .get((req, res) => {
    res.json({"name": `${req.query.first} ${req.query.last}`})
  })
  // 11. Use body-parser to Parse POST Requests
  .post((req, res) => {
    res.json({"name": `${req.body.first} ${req.body.last}`})
  })

module.exports = app;
