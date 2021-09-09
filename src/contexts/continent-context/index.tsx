import { useQuery } from '@apollo/client';
import React, { createContext, useState } from 'react';
import { CONTINENT } from '../../graphql/query/continent.query';

export const ContinentContext = createContext({
  continent: {},
  loading: true,
} as any);

interface Props {
  code: string;
  children: JSX.Element;
}
export default function ContinentProvider({ code, children }: Props) {
  const [continent, setContinent] = useState<any>({});

  const { data, loading } = useQuery(CONTINENT, {
    variables: {
      code,
    },
    onCompleted() {
      setContinent(data.continent);
    },
  });

  return (
    <ContinentContext.Provider value={{ continent, loading }}>
      {children}
    </ContinentContext.Provider>
  );
}
