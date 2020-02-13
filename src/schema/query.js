import { db } from "../models"
import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } from 'graphql';
import { PostType } from './post';
import { AuthorType } from "./author";
import { ObjectId } from 'bson';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    posts: { 
      type: new GraphQLList(PostType),
      resolve: root => db.Post.find()
    },

    post: {
      type: PostType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => db.Post.findById(args.id)
    },

    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => db.Author.findById(args.id)
    }
  })
});