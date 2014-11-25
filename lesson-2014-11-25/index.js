var couch = require('couch-db'),
     couchdb = require('couchdb-simple'),
   server = couch('https://skimdb.npmjs.com/registry');
   
   var host = 'https://skimdb.npmjs.com/registry';
   var port = '1500';
   var database = new couchdb(host, port);

database.read('/grunt/', function( results, error ) {
    console.log('Searching grunt staff');
    console.log(results);
   
     return results;   
}
 );

//console.log(function(results, error ));