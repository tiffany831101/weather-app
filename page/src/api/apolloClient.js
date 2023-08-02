import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8081/", // Replace with your actual GraphQL server endpoint
  cache: new InMemoryCache(),
});

export { client };
