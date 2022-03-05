import { gql } from "@apollo/client";

export const isValidWord = gql`
  query getRandomWord($word: String!) {
    isValidWord(word: $word)
  }
`;
