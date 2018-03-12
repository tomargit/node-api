var methods = {};
const Web3 = require('web3');
var _ =require('lodash');
var processContentJS = require('./processContent.js');
var encodeDecoder = require('./encodedecode.js');
var finalresult;
var result;
var async = require('async');


/* Connect to ethereum node */ 
const etherUrl = "http://localhost:8545";

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(etherUrl));
const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "name", 
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "patientId",
				"type": "string"
			}
		],
		"name": "viewCustomer",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "trialId",
				"type": "string"
			},
			{
				"name": "visitId",
				"type": "string"
			},
			{
				"name": "croId",
				"type": "string"
			},
			{
				"name": "siteInvestigatorId",
				"type": "string" 
			},
			{
				"name": "patientId",
				"type": "string"
			},
			{
				"name": "dataHash",
				"type": "string"
			} 
		],
		"name": "addCustomer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			} 
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function" 
	}
];
	 
	    
var contractInstance = new web3.eth.Contract(abi,'0x3a323dfe284d2a2b23acb4b03fbcbc0e5be308a4');

var reply = "false";

unlockAccountsIfNeeded("0x31cdfc58bb551218261fe505c219e00d83474d61","kiran");



function unlockAccountsIfNeeded(account, password, unlock_duration_sec) {
	console.log("I am Unlocking account"); 
    if (typeof(unlock_duration_sec)==='undefined') unlock_duration_sec = 300;
	   web3.eth.personal.unlockAccount(account, password, unlock_duration_sec); 
    }
	
 /*
 var reply1=contractInstance.methods.viewCustomer(patientId).call().then(function (result) {
        finalresult=result;
		console.log("Final result is"+finalresult);
		var decodedJSON=encodeDecoder.data.decodeContent(finalresult)
	console.log("Parsed Data is"+decodedJSON);
	 result=encodeDecoder.data.getJsonDiff(processData,decodedJSON);
	 finalresult=result;
	console.log("result comaprison is "+finalresult); 
});  
 
 */
	

function _function1 (req) {
	 console.log("1 method");
    return function (callback) {
        var something = 1;
        callback (null, something);
   }
}

function _function2 (something, callback) {
    return function (callback) {
       var somethingelse = function () { 
	   console.log('2 method');
	   // do something here };
       callback (err, somethingelse);
    }
}
}

function _function3 (something, callback) {
    return function (callback) {
      var somethingmore = function () { // do something here };
	  console.log('3 method');
      callback (err, somethingmore);
    }
}
}  /* */
	 
methods.viewPatientDetails=function viewPatientDetails(processData,patientId){
	
	/*var finalresult;
	console.log("gng to get Patient Details for patient with id="+patientId);
		var reply1=contractInstance.methods.viewCustomer(patientId).call().then(function (result) {
        finalresult=result;
		console.log("Final result is"+finalresult);
		var decodedJSON=encodeDecoder.data.decodeContent(finalresult)
	console.log("Parsed Data is"+decodedJSON);
	 result=encodeDecoder.data.getJsonDiff(processData,decodedJSON);
	 finalresult=result;
	console.log("result comaprison is "+finalresult); 
});  
	
		
		return finalresult; 
		*/
		asynResult = '';
		async.waterfall(
    [
        function(callback) {
			contractInstance.methods.viewCustomer(patientId).call().then(function (result){
				callback(null,result,result);
			});
            
        },
        function(arg1, arg2, callback) {
           // var caption = arg1 +' and '+ arg2;
			console.log("Caption is"+arg1);
			var caption=encodeDecoder.data.decodeContent(processData,arg1)
            callback(null, caption);
        }, 
        function(caption, callback) {
            //caption += ' Rock!';
			console.log(" decoded data is"+caption);
            callback(null, caption);
        }
    ],
    function (err, caption) {
        console.log('1asynResult ------- ' + asynResult);
		console.log(caption);
        asynResult = caption;
		console.log('2asynResult ------- ' + asynResult);
		// Node.js and JavaScript Rock!
    }
	
);
	
}
	
	

		
	 
methods.addPatientDetails = function addPatientDetails(trialId,visitId,croId,siteInvestigatorId,patientId,dataHash){
	    console.log("Gng to store Patinet Trial details");
		console.log(JSON.stringify(dataHash));
		var reply2=contractInstance.methods.addCustomer(trialId,visitId,croId,siteInvestigatorId,patientId,JSON.stringify(dataHash)).send({from: "0x31cdfc58bb551218261fe505c219e00d83474d61",gas: 4500000}).then(console.log);
}


 
exports.data = methods;
exports.result = result;
module.exports.finalresult = finalresult;
	
	function checkWork() { 
		console.log("I am Miner");
		console.log(web3.eth.getBlock("pending"));
		//web3.eth.miner.start();
		//if (web3.eth.getBlock("pending").getTransactions.length > 0) {
        //if (eth.mining) return;
          // web3.miner.start(mining_threads);
    //} else {
      //  miner.stop();
    //}
	web3.eth.getBlock("pending",
    function (error, block) {
        if (error) {
            console.error(error);
        } else {
            console.log(block.transactions.length); 
			web3.eth.start;
			
        }
    });
}


//checkWork();
    
