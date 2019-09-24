import userResolvers from './user';
import productTokenResolvers from './productToken';
import { merge } from 'lodash';

const resolvers = merge(userResolvers,productTokenResolvers);

export default resolvers;