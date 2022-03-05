import { gql } from "@apollo/client";

export const getRandomWord = gql`
  query getRandomWord($length: Int = 5) {
    randomWord(length: $length) {
      word
      wordLength
    }
  }
`;
