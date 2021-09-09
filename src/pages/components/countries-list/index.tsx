import React from 'react';
import CountryItem from './country-item';

interface Props {
  countries: any;
}

export default function CountryList({ countries }: Props) {
  const countriesList = countries?.map((country: any, index: number) => (
    <CountryItem country={country} key={index} />
  ));
  return (
    <div className='flex justify-evenly flex-wrap w-100'>{countriesList}</div>
  );
}
