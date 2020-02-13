import { fakeDatabase as database } from "../FakeDatabase";
import { GraphQLObjectType, GraphQLList } from 'graphql';
import { PostType } from './post';

// doc : https://github.com/atherosai/graphql-gateway-apollo-express/blob/master/server/schema/users/UserMutations.ts#L11

export const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    
  })
});