const Web3 = require ('web3');
const contractFile = require ('./escrowABI.abi');
const providerRPC  = {
    development: 'http://localhost:9933',
    moonbase: 'https://rpc.testnet.moonbeam.network',
};
const web3 = Web3(providerRPC.moonbeam_development);

sleep = milliseconds => new Promise((resolve) => {setTimeout(resolve, milliseconds)});


describe('Escrow', async function () {
    // contract instance
    let EscrowInstance

    // addresses
    let Agent
    let sender 
    let receiver   
 
    // init tests
    before(async () => {
        // setup accounts
        [Agent, sender, receiver] = await ethers.getSigners() 

        // deploy contract instance
        const Escrow1Contract = await ethers.getContractFactory("Escrow");
        EscrowInstance = await EscrowContract.deploy()

    });

    it('Agent account have agent role', async () => {
        expect(await EscrowInstance.hasRole(EscrowInstance.Agent(), Agent.address)).to.equal(true);
    });


    it('sender have sender role, receiver have receiver role', async () => {
        // sender deposit 1 ether for receiver
        await EscrowInstance.connect(sender).DepositFor(receiver.address, {value: ethers.utils.parseEther("1.0")})
        expect(await EscrowInstance.hasRole(EscrowInstance.Sender(), sender.address)).to.equal(true)
        expect(await EscrowInstance.hasRole(EscrowInstance.Receiver(), receiver.address)).to.equal(true)
    })


    it('sender can not get refund before the time limit', async () => {

        try {
            await Escrow1Instance.connect(sender).Withdraw()
        }catch(err){
            assert.include(err.message, "you cant get refund before time limit", "the escrow should contain this")
            expect(err.message).to.equal("VM Exception while processing transaction: reverted with reason string 'you cant get refund before time limit'")
        }
    })


    it('receiver can withdraw from the escrow if in time limit', async () => {

        // receiver withdraw
        expect(parseInt(await Escrow1Instance.getBalance())).to.be.above(0)
        await Escrow1Instance.connect(receiver).Withdraw()
        expect(parseInt(await EscrowI1instance.getBalance())).to.be.equal(0)
    })


    
    it('sender can refund from the escrow if out of time limit', async () => {
        // deposit another eth
        await EscrowInstance.connect(sender).DepositFor(receiver.address, {value: ethers.utils.parseEther("1.0")})
        
        // wait for 15 seconds
        await sleep(15000)

        // sender get refund
        expect(parseInt(await EscrowInstance.getBalance())).to.be.above(0)
        await EscrowInstance.connect(sender).Withdraw()
        expect(parseInt(await EscrowInstance.getBalance())).to.be.equal(0)
    });
        describe ("after approval from address other than the agent",() => {
            it ("should revert", async () => {
                let ex;
                try {
                    await contract.connect (receiver) .approve();
                    }
                    catch (_ex){
                        ex = _ex;
                    }
                    assert(ex, "Any attempt to approve Escrow from receiver address.Expect transaction to revert");

            });
        }


    
        )
                describe ("after approval from agent", () => {
                    it ("should transfer balance to receiver" , async () => {
                        const before = await ethers.provider.getBalance(receiver.getAddress());
                        const approve = await contract.connect(agent).approve();
                        const after = await ethers.provider.getBalance(receiver.getAddress());
                        assert.equal(after.sub(before). tostrings (), deposit.tostring());
                    });
                })
             });