import React from 'react';
import { useParams } from 'react-router';
import CountryProvider from '../../contexts/country-context';
import Details from '../components/country-details';

export default function CountryDetails() {
  const params: any = useParams();

  return (
    <CountryProvider code={params.code}>
      <Details />
    </CountryProvider>
  );
}
