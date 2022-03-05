import { gql } from "apollo-server-express";

import wordSchema from "./wordSchema";

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, wordSchema];
