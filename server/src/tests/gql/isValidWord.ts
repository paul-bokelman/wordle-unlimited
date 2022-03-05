import { gql } from "graphql-request";

export const isValidWordDocument = gql`
  query getRandomWord($word: String!) {
    isValidWord(word: $word)
  }
`;
