import axios from 'axios';
const API_URL = 'http://localhost:9000/graphql';
export const getAllUsers = async () =>
  axios.post(API_URL, {
    query: `
      query {
        getUserDetails{
          email
          role
        }
      }
    `,
  });

  export const getUser = async variables =>
  axios.post(API_URL, {
    query: `
    query ($email: String!) {
        getUser(email: $email){
          email
          role
        }
      }
    `,variables
  });

  export const login = async variables =>
  await axios.post(API_URL, {
    query: `
      mutation ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          email
        }
      }
    `,
    variables,
  });