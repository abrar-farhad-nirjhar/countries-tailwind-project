import { useQuery } from '@apollo/client';
import React, { useState, createContext } from 'react';
import { CONTINENTS } from '../../graphql/query/continents.query';

export const ContinentsContext = createContext({
  continents: [],
});
interface Props {
  children: JSX.Element;
}
export default function ContinentsProvider({ children }: Props) {
  const [continents, setContinents] = useState<any>([]);
  const { data } = useQuery(CONTINENTS, {
    onCompleted() {
      setContinents(data.continents);
    },
  });
  return (
    <ContinentsContext.Provider value={{ continents }}>
      {children}
    </ContinentsContext.Provider>
  );
}
