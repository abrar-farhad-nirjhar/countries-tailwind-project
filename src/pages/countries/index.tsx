import React, { useContext } from 'react';
import { CountriesContext } from '../../contexts/countries-context';
import Container from '../components/container';
import CountryList from '../components/countries-list';
import Loading from '../components/loading';

export default function Countries() {
  const { countries, loading } = useContext(CountriesContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <CountryList countries={countries} />
    </Container>
  );
}
