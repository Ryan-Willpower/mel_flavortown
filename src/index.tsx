import * as React from "react";
import { render } from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "./theme";

import App from "./App";

const apolloClient = new ApolloClient({
  uri: "https://settling-seasnail-34.hasura.app/v1/graphql",
  cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");

render(
  <ThemeProvider>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  rootElement
);
