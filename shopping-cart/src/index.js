import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://localhost:4000/',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        currencies{
          label
        }
      }
    `,
  })
  .then((result) => console.log(result));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);