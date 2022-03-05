import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getWords(length: Int, limit: Int): [Word!]!
    randomWord(length: Int!): Word!
    isValidWord(word: String!): Boolean!
  }

  extend type Mutation {
    addWord(word: String!, wordLength: Int!): Word!
  }

  type Word {
    id: ID!
    word: String!
    wordLength: Int!
  }
`;
