import { useQuery } from '@apollo/client';
import React, { createContext, useState } from 'react';
import { COUNTRY } from '../../graphql/query/country.query';

interface Props {
  code: string;
  children: JSX.Element;
}
interface Country {
  country: any;
  loading: boolean;
}

export const CountryContext = createContext({
  country: {},
  loading: true,
} as Country);

export default function CountryProvider({ code, children }: Props) {
  const [country, setCountry] = useState<any>({});
  const { data, loading } = useQuery(COUNTRY, {
    variables: {
      code,
    },
    onCompleted() {
      setCountry(data.country);
    },
  });
  return (
    <CountryContext.Provider value={{ country, loading }}>
      {children}
    </CountryContext.Provider>
  );
}
