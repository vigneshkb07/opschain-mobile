import Web3 from 'web3';

let web3 = null;

export default {
    connection: () => web3,
    /**
     * Connects to web3 and then sets proper handlers for events
     */
    connect: async() => {
      console.log('Blockchain Connecting ...');
      const provider = new Web3.providers.HttpProvider('http://localhost:8545');
      web3 = new Web3(provider);
      console.log('----connected to blockchain---')
    },
    createAccount: async() =>{
      const account = await web3.eth.accounts.create();
      return account;
    }
}