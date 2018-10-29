var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World!')
})
 console.log("running on port 4200");
app.listen(4200)