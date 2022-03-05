import { request } from "graphql-request";
import { isValidWord as checkIfValid } from "./gql";
export const isValidWord = async (word: string) => {
  const data = await request(
    import.meta.env["VITE_SERVER_URL"] as string,
    checkIfValid,
    { word }
  );
  return data?.isValidWord;
};
