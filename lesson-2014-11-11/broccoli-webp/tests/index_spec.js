'use strict';

var WebPFilter = require('../index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit
  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/


exports.WebPFilter = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  main: function(test) {
   test.expect(2);
   var inputTree = 'dggds';
   var options = {path: ''};
   var g = new WebPFilter(inputTree, options);
   test.equals(g.inputTree, inputTree, 'inputTree matches');
  
    var b = WebPFilter.prototype.extensions;
    var c = b.length;
    var d = 3;
    
     test.equals(c, d, 'File types match');
    
      test.done();
  }
};
