import { useQuery } from '@apollo/client';
import React, { useState, createContext } from 'react';
import { CONTINENTS } from '../../graphql/query/continents.query';

export const ContinentsContext = createContext({
  continents: [],
  loading: true,
});
interface Props {
  children: JSX.Element;
}
export default function ContinentsProvider({ children }: Props) {
  const [continents, setContinents] = useState<any>([]);
  const { data, loading } = useQuery(CONTINENTS, {
    onCompleted() {
      setContinents(data.continents);
    },
  });
  return (
    <ContinentsContext.Provider value={{ continents, loading }}>
      {children}
    </ContinentsContext.Provider>
  );
}
