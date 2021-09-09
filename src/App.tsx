import React from 'react';
import { client } from './lib/apollo';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route } from 'react-router-dom';
import Countries from './pages/countries';
import Continents from './pages/continents';
import Languages from './pages/languages';
import CountryDetails from './pages/country-details';
import CountriesProvider from './contexts/countries-context';
import LanguagesProvider from './contexts/languages-context';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <BrowserRouter>
          <Route path='/' exact>
            <CountriesProvider>
              <Countries />
            </CountriesProvider>
          </Route>
          <Route path='/country-details/:code' component={CountryDetails} />
          <Route path='/continents' component={Continents} />
          <Route path='/languages'>
            <LanguagesProvider>
              <Languages />
            </LanguagesProvider>
          </Route>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
