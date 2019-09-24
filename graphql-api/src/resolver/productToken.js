import productTokenModel from '../model/productToken';
import productRefTokenModel from '../model/productReferenceToken';
import { sha256 } from 'js-sha256';
import { mintProductRefToken ,mintProductToken} from '../service/productTokenService';

 const productTokenResolvers = {
  Query: {
    getProductRefToken: async (_,args)=>{
      const productReferences = await productRefTokenModel.find({productRefTokenOwner:args.productRefTokenOwner});
      return productReferences ;
    }
  },
  Mutation: {
    mintProductRefToken: async(_,args) =>{
      try{const existingToken = await productTokenModel.findOne({serialNo: args.serialNo})
          if (existingToken) {
            throw new Error('Reference token already exists');
          }
          const tokenURI = sha256(`${args.name}${args.description}`);
          const dataToSend = { to:args.productRefTokenOwner,tokenURI:tokenURI}
          const refTokenresult = await mintProductRefToken(dataToSend);
          const productReference = new productRefTokenModel({
            description:args.description,
            name:args.name,
            imageURL: args.imageURL,
            tokenId: refTokenresult.data.tokenId,
            productRefNumber: args.productRefNumber,
            productRefTokenOwner: args.productRefTokenOwner
          })
          const res = await productReference.save();
          return 'success'
        } catch (err) {
          throw err;
        }

    },
    mintProductToken: async(_,args) => {
        try {
          console.log('--->args',args)
          const existingToken = await productTokenModel.findOne({serialNo: args.serialNo})
          if (existingToken) {
            throw new Error('Reference token already exists');
          }
          // getting the tokenId for the particular token owner address
          const tokenData = await productRefTokenModel.findOne({productRefTokenOwner:args.productRefTokenOwner});
         
          const tokenURI = sha256(`${args.serialNo}${args.name}${args.description}`);
          const dataToMint = {to:args.productRefTokenOwner,tokenId:tokenData.tokenId,tokenURI:tokenURI}
          const tokenResult = await mintProductToken(dataToMint)
          const productRef = new productTokenModel({
             serialNo: args.serialNo,
             description: args.description,
             imageURL: args.imageURL,
             name: args.name,
             tokenId: tokenResult.data.tokenId,
             transactionHash: tokenResult.data.hash
          })
          const res = await productRef.save();
          return 'success'
        } catch (err) {
          throw err;
        }
      },
      tokenTransfer:async(_,args) =>{
        try {
          console.log('--->args',args)
          const refTokenresult = await mintProductRefToken(args);
          return 'success'
        } catch (err) {
          throw err;
        }
      }

  }
};

export default productTokenResolvers;

