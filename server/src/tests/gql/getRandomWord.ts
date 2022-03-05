import { gql } from "graphql-request";

export const getRandomWordDocument = gql`
  query getRandomWord($length: Int = 5) {
    randomWord(length: $length) {
      word
      wordLength
    }
  }
`;
