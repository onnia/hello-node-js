var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');
//var json = require('package.json');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var app = connect();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(serveStatic('pages'))

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
});

app.use( function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  var json=JSON.stringify(req.body, null, 2);
  //var json=req.body;
  var mail;
  mail='{ "form" : "'+req.body.email+'" ';
  mail+=' "to" : "kualtonen@gmail.com" ';
  mail+=' "text" :"'+"Name:"+ req.body.name;
  mail+="email:"+ req.body.email;
  mail+="feedback :"+ req.body.comment;  
  mail+="}"
  res.end(req.body.email);
  
});

http.createServer(app).listen(6500);


//var email = data["email"];

//cosole.log(email);