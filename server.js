var express = require('express');
var another = require('./index.js');
var nodescript = require('./nodescript.js');
var processContentJS = require('./processContent.js');
var encodeDecoder = require('./encodedecode.js');
var app = express();
var port = process.env.PORT || 2000;
app.listen(port);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("Deployed");

app.post('/api/blockchain/', function(req, res) {
	/*var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;*/
	console.log("POST API CALL");
	
	//console.log(typeof req.body);
	//console.log(req.body);
	
	//console.log(JSON.stringify(processContentJS.data.processContent(req.body)));
	var processData = processContentJS.data.processContent(req.body);
	for (var key in processData) {
		var encodeDataHash= encodeDecoder.data.encodeContent(JSON.stringify(processData[key]['data_hash']));
		
		nodescript.data.addPatientDetails(processData[key]['Trail_ID'],processData[key]['Visit_ID'],processData[key]['Visit_ID'],processData[key]['Site_Investigator_ID'],processData[key]['Patient_ID'],encodeDataHash);
		

	}
	res.send(processData);
	
});


/*app.get('/api/blockchain/', function(req, res) {
	var user_id = req.param('id');
	var token = req.param('token');
	var geo = req.param('geo');  

	console.log("GET API CALL");
	
	res.send(another.data.concat(user_id, token, geo));
});*/

/*app.post('/api/blockchain/', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
	console.log("POST API CALL");

    res.send(user_id + ' ' + token + ' ' + geo);
});*/