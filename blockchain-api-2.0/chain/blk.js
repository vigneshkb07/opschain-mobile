const { ContractService, TransactionService, WalletService } = require('opschain-connector')

const { BLK_PRIVATE_RELAYER_ACCOUNT, BLK_PRIVATE_NODE_HOST, BLK_PRIVATE_NODE_PORT, BLK_PRIVATE_PLATFORM_RELAYER_ADDRESS, BLK_PUBLIC_NODE_PORT } = require('../utils/constants')

module.exports = (async function () {
  // Contract Service initialization
  var contractService = new ContractService()
  //var promiseC1 = contractService.addContractFromTruffle(require('./contracts/ProductToken.json'), 'ProductToken')
  //var promiseC2 = contractService.addContractFromTruffle(require('./contracts/Wallet.json'), 'Wallet')

  // Wallet Service initialization
  var walletService = new WalletService()
  //const promiseW1 = walletService.addPrivateKey(BLK_PRIVATE_RELAYER_ACCOUNT)

  // Transaction Service : Private network initialization
  var privateTransactionService = new TransactionService(BLK_PRIVATE_NODE_HOST + ':' + BLK_PRIVATE_NODE_PORT, walletService, nbBlockConfirmation = 1, defaultGasPrice = 0)
   
  var receipts = await Promise.all([promiseW1, promiseC1])

  const ProductChain = require('./productChain')
  const WalletChain = require('./walletChain')
  return {
    //BLK_PRIVATE_RELAYER_ACCOUNT: receipts[0],
    contractService,
    walletService,
    privateTransactionService,
    BLK_PRIVATE_PLATFORM_RELAYER_ADDRESS,
    private: {
      product: new ProductChain(privateTransactionService, BLK_PRIVATE_PLATFORM_RELAYER_ADDRESS),
      wallet: new WalletChain(publicTransactionService, BLK_PUBLIC_PLATFORM_RELAYER_ADDRESS),
    }
  }
})()