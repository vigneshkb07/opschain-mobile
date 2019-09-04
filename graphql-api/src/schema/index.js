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
  
  type Query {
    getUserDetails: [User] 
  }
  
  type Mutation {
    signup(name: String!, email: String!, password: String!,role: String!):User 
    login(email:String!,password:String!):String
  }
`

export default typeDefs;
