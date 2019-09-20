

// Chain provides a set of common actions on the smart contract
//   - useful to abstract technical type conversion
//   - we use more friendly names (no mint :))


class ProductChain {
  constructor (transactionService, contractAddress) {
    this.txService = transactionService
    this.contractAddress = contractAddress
    //this.account = account
    this.instance = null
  }
  
  async genericMethodCall(contractInfo, payload){

    // We use this to intialise the contract instance speciefied in the endpoint call
    let { contractService } = await require('./blk')
    let win = await contractService.getContractFromName(contractInfo.contractName)
    let abi = win.abi
    let data = win.bytecode
    let web3 = await this.txService._getWeb3()
    let contractInstance = new web3.eth.Contract(abi, contractInfo.contractAddress)

    // Call the specified method applying the payload
    let data = await contractInstance.methods[contractInfo.methodName].apply(null, payload).encodeABI()

    // Send the tx through the relayer contract
    let tx = await this.txService.sendTransactionThroughRelayer(address, 0, data, this.contractAddress, this.account, 'nonce', 'sign', {gas: 2000000})
    let hash = await tx.hashPromise()

    return { tx: hash, receiptPromise: tx.receiptPromise() }
  }
  
  // async getInstance () {
  //   if (!this.instance) {
  //     let { contractService } = await require('./blk')
  //     let contractObject = await contractService.getContractFromName('BottleToken')
  //     let web3 = await this.txService._getWeb3()
  //     this.instance = new web3.eth.Contract(contractObject.abi, this.contractAddress)
  //   }
  //   return this.instance
  // }

  // async mintTokenURI (to, tokenId,tokenURI ) {
  //   // return (await this.getInstance()).methods.mintWithTokenURI(
  //   //   to,tokenId,tokenURI
  //   // ).call()
  //  return {token:true}
  //   };
  
  
  // async mintProductRefToken(to,tokenURI){
  //   return (await this.getInstance()).methods.mintProductRefToken(to,tokenURI).call()
  // }

  
}

module.exports = ProductChain