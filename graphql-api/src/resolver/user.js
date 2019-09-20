import userModel from '../model/user';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { getNewUserWalletAddress } from '../service/userWalletService';


 const resolvers = {
  Query: {
    getUserDetails:async (_,args,p,req)=> {
      return userModel.find({}).exec();
    },
    getUser: async (_,args)=>{
      const user = await userModel.findOne({email:args.email});
      return user;
    }
  },
  Mutation: {
  signup: async(_,args) =>{
      try {
        const existingUser = await userModel.findOne({ email: args.email });
        console.log('-----mm-',existingUser)
        if (existingUser) {
          throw new Error('User exists already.');
        }
        const { address } = await getNewUserWalletAddress();
        const hashedPassword = await bcrypt.hash(args.password, 12);
        const user = new userModel({
          email: args.email,
          password: hashedPassword,
          name:args.name,
          role:args.role,
          walletAddress:address
        });
        const result = await user.save();
        return result
      } catch (err) {
        throw err;
      }
    },
   login: async (_, { email, password })=> {
    const user = await userModel.findOne({ email:email })
      if (!user) {
        throw new Error('No user with that email')
      }

      const valid = await bcrypt.compare(password, user.password)

      if (!valid) {
        throw new Error('Incorrect password')
      }

      return {email,token:jsonwebtoken.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role
        },
        'somesupersecret',
        { expiresIn: '1d' }
      )}
    },
  }
};

export default resolvers;

