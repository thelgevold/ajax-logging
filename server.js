var express = require('express')
var app = express()
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '')))
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/js', express.static(__dirname + '/js/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/logging', function(req, res) {
  var logMessage = {};

  logMessage.logger = req.body.logger;
  logMessage.level = req.body.level;
  logMessage.message = req.body.message;
  logMessage.url = req.body.url;
  logMessage.timestamp = req.body.timestamp;

  console.log(logMessage);

  res.send(logMessage);
});
 
app.listen(3000)