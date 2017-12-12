// var app = require('./basic_server.js')
const express = require('express')
const app = express();
var path = require('path')
// 
// app.get('/', (req, res) => {
  // res.send('Hello World')
// })

app.get('/', (req, res) => {
  app.use(express.static(path.join(__dirname, '../client')))
  res.sendFile(path.join(__dirname, '/../client/index.html'))
})

app.get('/login', function(req, res) {
  console.log('request from ');
  res.send('what up asderr')
})




app.listen(3000, () => console.log('Example app listening on port 3000!'))