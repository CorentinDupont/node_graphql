import { GraphQLObjectType, GraphQLString } from 'graphql';
import { AuthorType } from './author';
import { db } from '../models';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: { 
      type: AuthorType,
      resolve: root => db.Author.findById(root.authorId)
    },
  })
});