import userModel from '../model/user';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import web3 from '../utils/web3';
 const resolvers = {
  Query: {
    getUserDetails:async (_,args,p,req)=> {
      return userModel.find({}).exec();
    }
  },
  Mutation: {
  signup: async(_,args) =>{
      try {
        const existingUser = await userModel.findOne({ email: args.email });
        console.log('------',existingUser)
        if (existingUser) {
          throw new Error('User exists already.');
        }
        const { address } = await web3.createAccount();
        console.log('---adress from blockchain',address)
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
      console.log('--------user finded',user)
      if (!user) {
        throw new Error('No user with that email')
      }

      const valid = await bcrypt.compare(password, user.password)

      if (!valid) {
        throw new Error('Incorrect password')
      }

      return jsonwebtoken.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role
        },
        'somesupersecret',
        { expiresIn: '1d' }
      )
    },
  }
};

export default resolvers;

