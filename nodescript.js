var methods = {};
const Web3 = require('web3');

/* Connect to ethereum node */
//const etherUrl = "http://localhost:8545";

let web3 = new Web3();
/*web3.setProvider(new web3.providers.HttpProvider(etherUrl));
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
];*/
	 
	    var trialId="TA1"; 
	    var visitId="VI_PA_TA1_1_1";
	    var croId="SPA"; 
	    var  siteInvestigatorId="SI_TA1_TA2";
	    var  patientId="PA_TA1_507";   
	   var  DataHash="88888888888888888888888"; 
	  

/*Call the function which already deployed on ethereum network
  Notice: ABI have to modifeid when the smart contract code change*/

//var contractInstance = web3.eth.contract(abi, '0x3a323dfe284d2a2b23acb4b03fbcbc0e5be308a4');
//var contractInstance = new web3.eth.Contract(abi,'0x3a323dfe284d2a2b23acb4b03fbcbc0e5be308a4');
//console.log("instance is"+contractInstance);
var reply = "false";
//var reply=contractInstance.methods.getName().call({from: "0x31cdfc58bb551218261fe505c219e00d83474d61"}).then(console.log);
//var reply1=contractInstance.methods.viewCustomer("PA_TA1_505").call().then(console.log);
//unlockAccountsIfNeeded("0x31cdfc58bb551218261fe505c219e00d83474d61","kiran");
//web3.eth.personal.unlockAccount("0x31cdfc58bb551218261fe505c219e00d83474d61", "kiran"); 
//var reply2=contractInstance.methods.addCustomer(trialId,visitId,croId,siteInvestigatorId,patientId,DataHash).send({from: "0x31cdfc58bb551218261fe505c219e00d83474d61",gas: 4500000}).then(console.log);
//console.log(reply);
 
//checkWork();




function unlockAccountsIfNeeded(account, password, unlock_duration_sec) {
	console.log("I am Unlocking account"); 
    if (typeof(unlock_duration_sec)==='undefined') unlock_duration_sec = 300;
	   web3.eth.personal.unlockAccount(account, password, unlock_duration_sec);
    }
	 
	
function viewPatientDetails(patientId){
		var reply1=contractInstance.methods.viewCustomer(patientId).call().then(console.log);
	}
	
methods.addPatientDetails = function addPatientDetails(trialId,visitId,croId,siteInvestigatorId,patientId,dataHash){
		//console.log("inside addPatientDetails");
		//console.log(trialId+','+visitId+','+croId+','+siteInvestigatorId+','+patientId);
		console.log(JSON.stringify(dataHash));
		//var reply2=contractInstance.methods.addCustomer(trialId,visitId,croId,siteInvestigatorId,patientId,DataHash).send({from: "0x31cdfc58bb551218261fe505c219e00d83474d61",gas: 4500000}).then(console.log);
}
exports.data = methods;
	
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
    
