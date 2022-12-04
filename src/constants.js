export const LOGO = 'https://rocketium.com/images/v2/5ee1a13c9855283dbe2269f2/original/bc3743b6-16b1-4d70-adc8-02c62caba2c6_1670010992259.png';

export const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_adId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_spendLimit",
				"type": "uint256"
			}
		],
		"name": "settleTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "adId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "SettleTransaction",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_adId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_spendLimit",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_imageSize",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cta",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_desc",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_personid",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "_clickTag",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_publisherId",
				"type": "address"
			}
		],
		"name": "submitTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "adId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "spendLimit",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "imagesize",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "cta",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "string[]",
				"name": "personid",
				"type": "string[]"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_clickTag",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_publisherId",
				"type": "address"
			}
		],
		"name": "SubmitTransaction",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "transactions",
		"outputs": [
			{
				"internalType": "string",
				"name": "adId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "spendLimit",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageSize",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cta",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "clickTag",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "publisherId",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const smartContractAddress = '0xe0deF8B610b462668d131bfAaa52aB7eab89A5d3';