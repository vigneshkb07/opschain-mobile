import mongoose from 'mongoose';

const { Schema } = mongoose;

const productRefTokenSchema = new Schema({
   
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
    productRefNumber:{
        type:String,
        required:true
    },
    productRefTokenOwner:{
        type:String,
        required:true
    }

  });
  
  const productRefTokenModel = mongoose.model('productRefToken', productRefTokenSchema);
  export default productRefTokenModel;