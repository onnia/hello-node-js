var connect = require('connect');
var http = require('http');
var responseTime = require('response-time');

var app = connect();

app.use(responseTime()); 

app.use('/', function(req, res){
  res.end('Welcome to Connect!\n');
});

http.createServer(app).listen(6500);