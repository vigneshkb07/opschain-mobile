import { gql } from 'apollo-boost'


const LOGIN = gql`
mutation Login($email: String!,$password: String!) {
    login(email: $email,password: $password){
      email
      token
    }
  }
`


const SIGNIN = gql`
mutation Signup($name: String!,$email: String!,$password: String!,$role: String!) {
    signup(name: $name,email: $email,password: $password,role: $role){
        email
        walletAddress
    }
  }
`

export { LOGIN,SIGNIN };