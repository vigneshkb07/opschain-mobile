import mongoose from 'mongoose';
import express from 'express';
import web3 from './utils/web3';
import jwt from 'express-jwt';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/index';
import resolvers from './resolver/user';
import IsAdminDirective from './directive/isAdmin';
const path = '/api'
console.log('-----rootresolver',resolvers)
web3.connect();
mongoose.connect(
  'mongodb://localhost:27017/opschain-wallet',
{
  dbName: 'graphql-poc',
  useNewUrlParser: true,
},
);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', () => {
console.log(`Mongoose default connection open to mongodb://localhost:27017`);
});


const app = express();
app.use( 
  path,
  jwt({
    secret: 'somesupersecret',
    credentialsRequired: false
  })
)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    isAdmin: IsAdminDirective
  },
  context: ({ req }) => ({
    user: req.user
  })
})

server.applyMiddleware({ app, path })


app.listen(3000, '0.0.0.0', () => {
  console.log(`server running on port 3000`);
});