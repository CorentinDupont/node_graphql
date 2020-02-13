import schema from './schema';
import express from "express";
import graphqlHTTP from "express-graphql";
import cors from "cors";
import { db } from "./models"

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

export default app;