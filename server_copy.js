var express = require('express');
var another = require('./index.js');
var app = express();
var port = process.env.PORT || 2000;
app.listen(port);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("Deployed");

app.get('/api/blockchain/', function(req, res) {
	console.log(req);
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
	console.log("GET API CALL");
	
	res.send(another.data.concat(user_id, token, geo));
    //res.send(user_id + ' ' + token + ' ' + geo);
});

/*app.post('/api/blockchain/', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
	console.log("POST API CALL");

    res.send(user_id + ' ' + token + ' ' + geo);
});*/

/*app.get('/api/blockchain/', function(req, res) {
	var user_id = req.param('id');
	var token = req.param('token');
	var geo = req.param('geo');  

	console.log("GET API CALL");
	
	res.send(another.data.concat(user_id, token, geo));
});*/