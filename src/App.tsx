import React from 'react';
import { client } from './lib/apollo';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route } from 'react-router-dom';
import Countries from './pages/countries';
import Continents from './pages/continents';
import Languages from './pages/languages';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <BrowserRouter>
          <Route path='/' component={Countries} exact />
          <Route path='/continents' component={Continents} />
          <Route path='/languages' component={Languages} />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
