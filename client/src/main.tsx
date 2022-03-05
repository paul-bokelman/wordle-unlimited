import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";
import { WordProvider } from "./context/word";

export const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <WordProvider>
        <App />
      </WordProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
