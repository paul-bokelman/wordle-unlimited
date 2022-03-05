import { gql } from "graphql-request";

export const getWordsDocument = gql`
  query getWords($length: Int, $limit: Int) {
    getWords(length: $length, limit: $limit) {
      word
    }
  }
`;
