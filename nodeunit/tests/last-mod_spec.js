var lastmod = require('../last-mod');

exports.lastmod = function(test){
    test.expect(2);
    
    /* The argument that is being  tested */
    var file = lastmod('../task-1.js');
      var filenon = lastmod('../task-1-non.js');
    
    /*api reference*/
 test.equal(filenon, false, 'return if creation date');
    
     var creafile  =  file instanceof Date;
    test.equal(creafile, true, 'return if creation date');
        
    
    test.done();
};

