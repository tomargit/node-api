
'use strict';

var methods = {};





methods.encodeContent = function(content) {
	let data = content;
	let buff = new Buffer(data);  
	let base64data = buff.toString('base64');
	return base64data;
}



methods.decodeContent = function(content) {
	data = content;  
	buff = new Buffer(data, 'base64');  
	let text = buff.toString('ascii');
	return text;
}

exports.data = methods;






