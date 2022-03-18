# escrow_moonbeam
Deploy escrow contract on moonbeam
STEPS TO RECREATE
PREPARATIONS:
sign on to metamask
Go to apps.moonbeam.network/moonbeam
Accept pop up window
select metamask
click next
click connect


Network Name: Moonbeam
Network URL https://rpc.api.moonbeam.network
ChainID:1284

click next on metamask
click approve
click approve
NOTE:Logged in with metamask should show

wizard.opensepplin.com

open terminal
create a folder inside download:
npm i web3 npm i solc@0.8.4

create a contract folder
paste escrow contract from solidity
under contract folder create the follwoing files




Open Ubutu terminal for docker
insert the following
install remote-containers in VS code
go to deploy and add private key
NOTE: make sure it starts with 0x
also add the address
On your local machine
insert 
docker pull purestake/moonbeam:v0.20.1
Then,

docker run --rm --name moonbeam_development --network host purestake/moonbeam:v0.20.1 --development --dev --ws-external --rpc-external
click enter
now open another terminal 
insert node deploy.js
to deploy the escrow




















