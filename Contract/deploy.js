const Web3 = require ('web3');
const contract = require ('./escrowABI.abi');
const providerRPC  = {
    development: 'http://localhost:9933',
    moonbase: 'https://rpc.testnet.moonbeam.network',
};
const web3 = new Web3 (providerRPC.moonbeam_development);

const account_from ={
    privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',

};



async function main() {
    const [deployer] = await ethers.getSigner();
    console.log('Deploying contracts with the account: ${deployer.address}');

}
main ()
    .then (() => process.exit(0))
    .catch (error => {
        console.error(error);
        process.exit(1);
    });



