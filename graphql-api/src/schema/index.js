import { gql } from 'apollo-server-express';

const typeDefs = gql`
  directive @isAdmin on FIELD_DEFINITION

  type User {
    id: Int!
    name: String!
    email: String!
    role: String!
    walletAddress: String
  }

  type productRefToken {
    description: String
    name: String
    imageURL: String
    tokenId: String
    productRefNumber: String
    productRefTokenOwner: String
  }
  
  type Query {
    getUserDetails: [User] 
    getUser(email: String!): User
    getProductRefToken(productRefTokenOwner:String!): [productRefToken]
  }

  type Token {
    email: String
    token: String
  }
  
  type Mutation {
    signup(name: String!, email: String!, password: String!,role: String!):User 
    login(email:String!,password:String!):Token
    mintProductRefToken(name:String!,description:String!,productRefNumber:String!,productRefTokenOwner:String!):String
    mintProductToken(serialNo:String!,name:String!, description:String!,productRefTokenOwner:String!, imageURL:String):String
    tokenTransfer(from:String!,to:String!,tokenId:String!):String
  }
`

export default typeDefs;
