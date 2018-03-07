var methods = {};

methods.concat = function(user_id, token, geo) {
	console.log("this is test");
	return "Response: " + user_id +"  "+ token + "    " + geo;
};

exports.data = methods;