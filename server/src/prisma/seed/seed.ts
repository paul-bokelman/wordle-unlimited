import fs from "fs";
import path from "path";
import { request, gql } from "graphql-request";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.SERVER_URL as string;

const addWord = async ({ word }: { word: string }): Promise<void> => {
  const query = gql`
    mutation AddWord($word: String!, $wordLength: Int!) {
      addWord(word: $word, wordLength: $wordLength) {
        word
      }
    }
  `;
  const variables = {
    word,
    wordLength: word.length,
  };

  await request(url, query, variables);
};

const seed = async () => {
  const words = JSON.parse(
    await fs.promises.readFile(path.join(__dirname, "allWords.json"), "utf8")
  );
  console.log(`Adding ${words.length} words...`);

  console.time("seed");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    await addWord({ word });
    console.log(word, i);
  }
  console.timeEnd("seed");

  return;
};

seed();
