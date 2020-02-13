import { fakeDatabase as database } from "./FakeDatabase";
import { GraphQLObjectType, GraphQLList } from 'graphql';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    posts: { 
      type: new GraphQLList(PostType),
      resolve: root => database.getBlogPosts()
    },
  })
});