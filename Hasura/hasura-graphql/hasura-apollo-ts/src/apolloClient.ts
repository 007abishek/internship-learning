import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

/* 👇 MUST match an existing user id */
const headers = {
  "x-hasura-role": "user",
  "x-hasura-user-id": "7",
};

const httpLink = new HttpLink({
  uri: "http://localhost:8080/v1/graphql",
  headers,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:8080/v1/graphql",
    connectionParams: {
      headers, // 🔥 REQUIRED FOR SUBSCRIPTIONS
    },
  })
);

const link = split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return (
      def.kind === "OperationDefinition" &&
      def.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
