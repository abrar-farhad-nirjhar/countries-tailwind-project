import React, { useContext } from 'react';
import { CountriesContext } from '../../../contexts/countries-context';
import CountryItem from './country-item';

export default function CountryList() {
  const { countries } = useContext(CountriesContext);
  const countriesList = countries?.map((country, index) => (
    <CountryItem country={country} key={index} />
  ));
  return (
    <div className='flex justify-evenly flex-wrap w-100'>{countriesList}</div>
  );
}
