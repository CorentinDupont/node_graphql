import { buildSchema } from "graphql";
import { fakeDatabase as database } from "./FakeDatabase";
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

// Docs : https://graphql.org/blog/rest-api-graphql-wrapper/

const PostType = new GraphQLObjectType({
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

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    posts: { 
      type: new GraphQLList(PostType),
      resolve: root => database.getBlogPosts()
    },
  })
});

const Schema = new GraphQLSchema({
  query: QueryType
});

export default Schema;