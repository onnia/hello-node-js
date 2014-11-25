
var url = 'https://skimdb.npmjs.com/registry/';

var server = require('nano')(url);
var db = 'grunt';


var registry = server.use('grunt');

server.list(function(err, body) {
  // body is an array
  body.forEach(function(db) {
    console.log(db);
  });
});