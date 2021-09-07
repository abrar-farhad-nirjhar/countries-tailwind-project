import React from 'react';
import CountriesProvider from '../../contexts/countries-context';
import Container from '../components/container';
import CountryList from './countries-list';

export default function Countries() {
  return (
    <CountriesProvider>
      <Container>
        <CountryList />
      </Container>
    </CountriesProvider>
  );
}
