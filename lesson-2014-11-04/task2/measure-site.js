var page = require('webpage').create(),
        system = require('system'), 
        fs = require('fs');

page.settings.javascriptEnabled = false;

// this defines the argumemt as adress to the page
url = system.args[1];

page.onResourceRequested = function(request) {
 //   fs.write("/home/username/sampleFileName.txt", "Message to be written to the file", 'w');
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) { 
    console.log('Receive ' + JSON.stringify(response, undefined, 4));
   fs.write("received.txt", JSON.stringify(response, undefined, 4), 'w');
  // console.log(e);
};

page.open(url, function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    var ua = page.evaluate(function() {
      return document.getElementsByTagName('html');
    });
    console.log(ua);
  }
});

page.onLoadFinished =  function() {
    console.log(page.content);
     fs.write("received.txt", page.content, 'w');
};

page.open(url);

console.log(url + 'with the following files downloaded');
phantom.exit();

