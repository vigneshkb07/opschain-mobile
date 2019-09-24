import mongoose from 'mongoose';

const { Schema } = mongoose;

const productTokenSchema = new Schema({
    serialNo: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageURL:{
      type: String,
    },
    name:{
      type:String,
      required: true
    },
    tokenId: {
      type:String,
    },
    transactionHash: {
      type: String
    }

  });
  
  const productTokenModel = mongoose.model('productToken', productTokenSchema);
  export default productTokenModel;