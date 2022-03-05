import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
dotenv.config();

import resolvers from "./resolvers";
import schema from "./schema";

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers as any,
});

server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`Apollo Server on ${process.env.SERVER_URL}`);
});
