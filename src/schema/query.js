import { fakeDatabase as database } from "../FakeDatabase";
import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } from 'graphql';
import { PostType } from './post';
import { AuthorType } from "./author";

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    posts: { 
      type: new GraphQLList(PostType),
      resolve: root => database.getBlogPosts()
    },

    post: {
      type: PostType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (root, args) => database.getBlogPost(args.id)
    },

    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => database.getAuthor(args.id)
    }
  })
});