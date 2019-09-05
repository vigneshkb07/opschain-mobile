import React from 'react';
import Layout from "./containers/Layout";
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
});

const history = createBrowserHistory();
function App() {
  console.log('client provider',client)
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Layout/>
      </Router>
    </ApolloProvider>
  );
}

export default App;