import { createContext, useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import type { ReactChild } from "react";
import { getRandomWord } from "../lib/gql";

interface WordContextInterface {
  word: string;
  length: number;
  rows: number;
  loading: boolean;
  setLength: (length: number) => void;
  newWord: () => void;
}

const WordContext = createContext<WordContextInterface>({
  word: "",
  length: 0,
  rows: 0,
  loading: false,
  setLength: (): void => {},
  newWord: (): void => {},
});

export const useWordContext = (): WordContextInterface => {
  return useContext(WordContext);
};

export const WordProvider = ({
  children,
}: {
  children: ReactChild;
}): JSX.Element => {
  const [word, setWord] = useState<{ word: string; wordLength: number }>({
    word: "moist",
    wordLength: 5,
  });
  const [length, setLength] = useState<number>(5);
  const [rows, setRows] = useState<number>(5);

  const { loading, refetch: newWord } = useQuery(getRandomWord, {
    variables: {
      length,
    },
    onCompleted: ({ randomWord }): void => {
      console.log(randomWord);
      return setWord(randomWord);
    },
  });

  const value: WordContextInterface = {
    word: word.word,
    length: word?.wordLength,
    rows,
    loading,
    setLength: (length: number): void => {
      setLength(length);
    },
    newWord,
  };

  return (
    <WordContext.Provider value={value}>
      {!loading && children}
    </WordContext.Provider>
  );
};
