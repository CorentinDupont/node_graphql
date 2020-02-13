import { buildSchema } from "graphql";
import { fakeDatabase as database } from "./FakeDatabase";
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

// Construct a schema, using GraphQL schema language
// export default buildSchema(`
//   schema {
//     query: Query
//   }

//   type Query {
//     authors: [Author]
//     posts: [Post]
//   }

//   type Author {
//     id: String
//     name: String
//     email: String
//   }

//   type Post {
//     id: String
//     title: String
//     content: String
//     author: Author
//   }
// `);

// const typeDefs = `

//   type Query {
//     posts: [Post]
//   }

//   type Post {
//     id: String
//     title: String
//     content: String
//     author: Author
//   }
// `

// const resolvers = {
//   Query: {
//     posts( _, args, context ) {
//       return fakeDatabase.getBlogPosts();
//     }
//   },
// };

// export default schema = makeExecutableSchema({ typeDefs, resolvers });

// // The root provides a resolver function for each API endpoint
// export const root = {
//   authors: () => database.authors,
//   posts: () => database.posts,
// };

// Docs : https://graphql.org/blog/rest-api-graphql-wrapper/

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    posts: { 
      type: new GraphQLList(PostType),
      resolve: root => database.getBlogPosts()
    }
  })
});

const Schema = new GraphQLSchema({
  query: QueryType
});

export default Schema;