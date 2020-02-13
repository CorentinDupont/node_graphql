import { GraphQLSchema } from 'graphql';
import { QueryType } from './query';
import { MutationType } from './mutation';

// Docs : https://graphql.org/blog/rest-api-graphql-wrapper/

const Schema = new GraphQLSchema({
  query: QueryType,
  // mutation: MutationType,
});

export default Schema;