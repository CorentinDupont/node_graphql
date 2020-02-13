import { fakeDatabase as database } from "./FakeDatabase";
import { GraphQLObjectType, GraphQLString } from 'graphql';
import { AuthorType } from './author';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: { 
      type: AuthorType,
      resolve: root => database.getAuthor(root.author)
    },
  })
});