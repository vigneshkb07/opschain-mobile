import { expect } from 'chai';
import * as userApi from './api';

describe('UserList', () => {

    it(' getUserDetails: [User] = returns all the user in the DB', async () => {
      const expectedResult = {
        data: {
          getUserDetails: [
            {
              email: "v2@gmail.com",
              role: "user"
            },
            {
              email: "v3@gmail.com",
              role: "user"
            },
            {
              email: "v7@gmail.com",
              role: "user"
            },
            {
              email: "v8@gmail.com",
              role: "user"
            },
            {
              email: "ballon@gmail.com",
              role: "user"
            },
            {
                email: "test8@gmail.com",
                role: "user"
            },
            {
                email: "test10@gmail.com",
                role: "user"
              },
              {
                email: "test11@gmail.com",
                role: "user"
              }
          ]
        }
      };
      const result = await userApi.getAllUsers();
      expect(result.data).to.eql(expectedResult);
    });

    it('getUser(email: String!): User = retrieve the specific user based on query param',async()=>{
        const expectedResult = {
            data: {
              getUser: {
                email: "v2@gmail.com",
                role: "user"
              }
            }
          }
        const result = await userApi.getUser({email:'v2@gmail.com'});
        expect(result.data).to.eql(expectedResult)
    })
  
});

// describe('Login',()=>{
//     const expectedResult = 
//         {
//             data: {
//               login: {
//                 email: "test11@gmail.com"
//               }
//             }
//           }
    
//     it('login(email:String!,password:String!):Token ',async()=>{
//         const result  = await userApi.login({email:'test11@gmail.com',password:'123'});
//         expect(result.data).to.eql(expectedResult)
        
//     })
// })