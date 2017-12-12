var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/login', function(req, res) {
  res.send('what up')
})