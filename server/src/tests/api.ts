import { request } from "graphql-request";
import {
  addWordDocument,
  getWordsDocument,
  getRandomWordDocument,
  isValidWordDocument,
} from "./gql";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.SERVER_URL as string;

// Queries

export const getWords = async ({
  length,
  limit,
}: {
  length?: number;
  limit?: number;
}) => {
  const response = await request(url, getWordsDocument, {
    length,
    limit,
  });
  return response;
};

export const getRandomWord = async ({ length }: { length: number }) => {
  const response = await request(url, getRandomWordDocument, { length });
  return response;
};

export const isValidWord = async ({ word }: { word: string }) => {
  const response = await request(url, isValidWordDocument, { word });
  return response;
};

// Mutations

export const addWord = async ({ word }: { word: string }) => {
  const response = await request(url, addWordDocument, {
    word,
    wordLength: word.length,
  });
  return response;
};
