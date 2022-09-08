import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql?'
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);