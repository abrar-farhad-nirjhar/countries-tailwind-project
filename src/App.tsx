import React from 'react';
import { client } from './lib/apollo';
import { ApolloProvider } from '@apollo/client';
function App() {
  return (
    <ApolloProvider client={client}>
      <div>Hello</div>
    </ApolloProvider>
  );
}

export default App;
