

var password = 'Hel';

// SHA1 password
var sha1pw = 'dbc2d1fed0dc37a70aea0f376958c802eddc0559';


function range(start, stop) {
	var result = [];
	for (var idx = start.charCodeAt(0), end = stop.charCodeAt(0); idx <= end; ++idx) {
		result.push(String.fromCharCode(idx));
	}
	return result;
};

var chars = range('a', 'z');

console.log('Orginal pass word is: ' + password);
console.log(chars);