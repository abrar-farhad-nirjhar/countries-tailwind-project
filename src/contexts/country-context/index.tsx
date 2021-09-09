import { useQuery } from '@apollo/client';
import React, { createContext, useState } from 'react';
import { COUNTRY } from '../../graphql/query/country.query';

interface Props {
  code: string;
  children: JSX.Element;
}
interface Country {
  country: any;
}

export const CountryContext = createContext({
  country: {},
} as Country);

export default function CountryProvider({ code, children }: Props) {
  const [country, setCountry] = useState<any>({});
  const { data } = useQuery(COUNTRY, {
    variables: {
      code,
    },
    onCompleted() {
      setCountry(data.country);
    },
  });
  return (
    <CountryContext.Provider value={{ country }}>
      {children}
    </CountryContext.Provider>
  );
}
