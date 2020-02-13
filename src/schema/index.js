import { GraphQLSchema } from 'graphql';
import { QueryType } from './query';

// Docs : https://graphql.org/blog/rest-api-graphql-wrapper/

const Schema = new GraphQLSchema({
  query: QueryType
});

export default Schema;