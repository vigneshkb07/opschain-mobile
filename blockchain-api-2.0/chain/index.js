module.exports = (async () => {
    const blk = await require('./blk')
  
    return  {
      wallet: blk.walletService,
      private: {
        product: blk.private.product

      }
    }
  })()