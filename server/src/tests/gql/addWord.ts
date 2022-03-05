import { gql } from "graphql-request";

export const addWordDocument = gql`
  mutation addWord($word: String!, $wordLength: Int!) {
    addWord(word: $word, wordLength: $wordLength) {
      id
      word
    }
  }
`;
