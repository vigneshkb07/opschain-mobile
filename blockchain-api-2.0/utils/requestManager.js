const {  RESPONSE_CODES } = require('./constants')
const ExceptionHandler = require('./ExceptionHandler')

class RequestManager {
  
  async _init () {
    if(!this.chain) {
      this.chain = await require('../chain')
    }
  }

  // Calls any method from any smart contract
  async genericMethod(contractInfo, payload) {
    await this._init()

    // Pass the transaction through the relayer smart contract
    const { tx, receiptPromise } = await this.chain.private.product.genericMethodCall(contractInfo, payload)
    let receipt = await Promise.all([receiptPromise])

    if (!receipt) {
      throw new ExceptionHandler(RESPONSE_CODES.SERVER_ERROR, 'RESPONSE ISSUE : Blockchain receipt is empty at the RequestHandler level')
    }
    
    return {
      private: {
        tx_hash: tx,
        receipt: receipt
      },
    }
  }

  // Searches for any event in any smart contract
  async genericEvent(eventInfo) {
    await this._init()

    // TODO : Add error handling
  
    // Pass the transaction through the relayer smart contract
    const { event } = await this.chain.private.wallet.genericEventCall(eventInfo)
  
    // Await until all the events have been captured
    let receipt = await Promise.all([event])

    if (!receipt) {
      throw new ExceptionHandler(RESPONSE_CODES.SERVER_ERROR, 'RESPONSE ISSUE : Blockchain receipt is empty at the RequestHandler level')
    }
  
    return {
      private: {
        event: receipt
      }
    }
  }

  async createUser() {
    await this._init()
    // Ensure the body variables are not empty; return an error otherwise.

    const { tx, receiptPromise } = await this.chain.private.wallet.newWalletContract()
    let receipt = await Promise.all([receiptPromise])
  
    // Verify the validity of the contract address generqted
    if (!(await this.chain.private.wallet.checkAddress(receipt[0].contractAddress))) {
      throw new ExceptionHandler(RESPONSE_CODES.APPLICATION_ERROR, 'Invalid address generated')
    }
    
    // return {
    //   private: {
    //     tx_hash: tx,
    //     user_wallet_address: receipt[0].contractAddress
    //   }
    // }
    return {
         user_wallet_address: '0x23989893898398398938398'
     }
  }

  // async mintToken(payload){
  //   await this._init()
  //   const { to,tokenURI} = payload
  //   let tokenid = await this.chain.private.product.mintProductRefToken(to,tokenURI);
  //   let result = await this.chain.private.product.mintTokenURI(to,tokenid,tokenURI);
  //   return {
  //     tokenId:tokenid
  //   };
  //}

  // async mintProductRefToken(payload){
  //   await this._init()
  //   const { to,tokenURI} = payload
  //   let tokenid = await this.chain.private.product.mintProductRefToken(to,tokenURI)
  //   return{
  //     tokenId:tokenid
  //   }
  // }


}
  
  
module.exports = new RequestManager()
  