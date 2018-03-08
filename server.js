var express = require('express');
var another = require('./index.js');
var nodescript = require('./nodescript.js');
var processContentJS = require('./processContent.js');
var encodeDecoder = require('./encodedecode.js');
var app = express();
app.set('view engine', 'ejs');
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
		
		console.log("")
		console.log("Encoded String : " +  encodeDataHash)
		console.log("")
		console.log("Decoded String : ");
		console.log(encodeDecoder.data.decodeContent(encodeDataHash));
		

	}
	res.send(processData);
	
});

app.get('/api/view/blockchain', function(req, res) {
	var dataString ='[{"Visit_ID": "VI_PA_TA1_1_1","Patient_ID": "PA_TA1_1","Site_Investigator_ID": "SI_TA1_TA2","Trail_ID": "TA1","Visit_Date": "43101.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"},{"Visit_ID": "VI_PA_TA1_1_2","Patient_ID": "PA_TA1_1","Site_Investigator_ID": "SI_TA1_TA2","Trail_ID": "TA1","Visit_Date": "43132.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"},{"Visit_ID": "VI_PA_TA1_2_1","Patient_ID": "PA_TA1_2","Site_Investigator_ID": "SI_TA1_TA2","Trail_ID": "TA1","Visit_Date": "43101.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"},{"Visit_ID": "VI_PA_TA1_2_2","Patient_ID": "PA_TA1_2","Site_Investigator_ID": "SI_TA1_TA2","Trail_ID": "TA1","Visit_Date": "43132.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"},{"Visit_ID": "VI_PA_TA2_1_1","Patient_ID": "PA_TA2_1","Site_Investigator_ID": "SI_TA1_TA2","Trail_ID": "TA2","Visit_Date": "43115.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"},{"Visit_ID": "VI_PA_TA2_1_2","Patient_ID": "PA_TA2_1","Site_Investigator_ID": "SI_TA1_TA2","Trail_ID": "TA2","Visit_Date": "43146.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"},{"Visit_ID": "VI_PA_TA2_2_1","Patient_ID": "PA_TA2_2","Site_Investigator_ID": "SI_TA1_TA2","Trail_ID": "TA2","Visit_Date": "43120.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"},{"Visit_ID": "VI_PA_TB1_1_1","Patient_ID": "PA_TB1_1","Site_Investigator_ID": "SI_TB1","Trail_ID": "TB1","Visit_Date": "43120.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"},{"Visit_ID": "VI_PA_TB1_1_2","Patient_ID": "PA_TB1_1","Site_Investigator_ID": "SI_TB1","Trail_ID": "TB1","Visit_Date": "43151.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"},{"Visit_ID": "VI_PA_TB1_2_1","Patient_ID": "PA_TB1_2","Site_Investigator_ID": "SI_TB1","Trail_ID": "TB1","Visit_Date": "43125.0","Visit_Time_In": "0.5083333333333333","Visit_Time_Out": "0.5208333333333334","Urobilinogen": "u","Bilirubin": "b","Ketone": "k","Blood": "b","Protien": "p","Nitrile": "n","Leukocytes": "l","SpecificGravity": "s","PH": "p","Microalbumin": "m"}]';
	console.log("GET API CALL");
	res.render('./pages/blockchain', {
       trialDataList: JSON.parse(dataString)
    });
	//var displayContent
	//res.send(another.data.concat(user_id, token, geo));
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