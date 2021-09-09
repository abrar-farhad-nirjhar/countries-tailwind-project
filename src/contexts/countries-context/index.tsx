import { useQuery } from '@apollo/client';
import React, { createContext, useState } from 'react';
import { COUNTRIES } from '../../graphql/query/countries.query';

export const CountriesContext = createContext({
  countries: [],
  loading: true,
});

interface Props {
  children: JSX.Element;
}
export default function CountriesProvider({ children }: Props) {
  const [countries, setCountries] = useState<any>([]);
  const { data, loading } = useQuery(COUNTRIES, {
    onCompleted() {
      setCountries(data.countries);
    },
  });

  return (
    <CountriesContext.Provider value={{ countries: countries, loading }}>
      {children}
    </CountriesContext.Provider>
  );
}
