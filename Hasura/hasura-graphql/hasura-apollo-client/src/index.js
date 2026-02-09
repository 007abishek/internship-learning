import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import App from "./App";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/v1/graphql",
  headers: {
    "x-hasura-role": "user",
    "x-hasura-user-id": "1"
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
