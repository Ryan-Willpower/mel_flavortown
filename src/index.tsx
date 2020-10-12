import * as React from "react"
import { render } from "react-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import App from "./App"
import GlobalStyle from "./global-style"

const apolloClient = new ApolloClient({
  uri: "https://settling-seasnail-34.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
})

const rootElement = document.getElementById("root")

render(
  <ApolloProvider client={apolloClient}>
    <App />
    <GlobalStyle />
  </ApolloProvider>,
  rootElement
)
