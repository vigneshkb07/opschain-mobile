// Chain provides a set of common actions on the smart contract
//   - useful to abstract technical type conversion
//   - we use more friendly names (no mint :))

class WalletPublicChain {
    constructor (transactionService, contractAddress, account) {
      this.txService = transactionService
      this.contractAddress = contractAddress
      this.account = account
      this.instance = null
    }
  
    async checkAddress (address) {
      let web3 = await this.txService._getWeb3()
      return web3.utils.checkAddressChecksum(address)
    }
  
    async executeTransaction (destination, value, data) {
      let tx = await this.txService.sendTransactionThroughRelayer(destination, value, data, this.contractAddress, this.account, 'nonce', 'sign', {gas: 2000000})
      let hash = await tx.hashPromise()
  
      return { tx: hash, receiptPromise: tx.receiptPromise() }
    }
  
    async executeTransactionByUser (fromAddress, destination, value, data) {
      let tx = await this.txService.sendTransactionThroughRelayer(destination, value, data, fromAddress, this.account, 'nonce', 'sign',{gas: 2000000})
      let hash = await tx.hashPromise()
  
      return { tx: hash, receiptPromise: tx.receiptPromise() }
    }
  
    async newWalletContract () {
      let { contractService } = await require('./blk')
      let win = await contractService.getContractFromName('Wallet')
      let abi = win.abi
      let data = win.bytecode
      let web3 = await this.txService._getWeb3()
      let walletContractInstance = new web3.eth.Contract(abi)
      let txData = walletContractInstance.deploy({data}).encodeABI()
      let tx = await this.txService.sendTransaction({data: txData, gas: 2000000}, this.account)
  
      let txHash = await tx.hashPromise()
  
      return {tx: txHash, receiptPromise: tx.receiptPromise()}
    }
    
    // async newWineryWalletContract () {
    //   let { contractService } = await require('./blk')
    //   let win = await contractService.getContractFromName('WineryWallet')
    //   let abi = win.abi
    //   let data = win.bytecode
    //   let web3 = await this.txService._getWeb3()
    //   let walletContractInstance = new web3.eth.Contract(abi)
  
    //   let txData = await walletContractInstance.deploy({data, arguments: [this.contractAddress]}).encodeABI()
  
    //   let tx = await this.txService.sendTransaction({data: txData, gas: 2000000}, this.account)
  
    //   let txHash = await tx.hashPromise()
  
    //  return {tx: txHash, receiptPromise: tx.receiptPromise()}
    //}
  }
  
  module.exports = WalletPublicChain