var page = require('webpage').create(),
        system = require('system');

// this defines the argumemt as adress to the page
url = system.args[1];

page.open(url, function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is ' + title);
   phantom.exit();
});

