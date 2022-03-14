const Web3 = require ('web3');
const contractFile = require ('./escrowABI.abi');
const providerRPC  = {
    development: 'http://localhost:9933',
    moonbase: 'https://rpc.testnet.moonbeam.network',
};
const web3 = Web3(providerRPC.moonbeam_development);
const account_from ={
    privateKey: 'Private Key',
};

const contractAddress = 'Contract Address';

const escrow = new web3.eth.Contract(Abi, contractAddress);

const retrieveTx= escrow.methods.retrieve();
const retrieve =async () => {
    console.log (`Calling the retrieve function in contract at address: ${contractAddress}`);

    const createTransaction = await web3.eth.accounts.signTransaction({
        to: contractAddress,
        data:retrieveTx.encodeABI(),
        gas:await retrieveTx.estimateGas(),
 },
 account_from.privateKey);
const createReceipt = await web3.eth.sendSignedTransaction(

);
console.log (`Tx successful with Hash: ${createReceipt.transactionHash}`);
const num = await escrow.methods.retrieve().call
();
console.log(`The current number stored is:${num}`);
};
 retrieve()

