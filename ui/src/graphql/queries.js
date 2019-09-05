import { gql } from 'apollo-boost';

const GET_USER = gql`
  query Getuser($email: String!) {
    getUser(email: $email) {
      email 
      walletAddress
    }
  }
`;

export {
    GET_USER
}