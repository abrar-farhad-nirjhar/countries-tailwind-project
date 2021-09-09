import { useQuery } from '@apollo/client';
import React, { useState, createContext } from 'react';
import { LANGUAGES } from '../../graphql/query/languages.query';

export const LanguagesContext = createContext({
  languages: [],
  loading: true,
});

interface Props {
  children: JSX.Element;
}
export default function LanguagesProvider({ children }: Props) {
  const [languages, setLanguages] = useState<any>([]);
  const { data, loading } = useQuery(LANGUAGES, {
    onCompleted() {
      setLanguages(data.languages);
    },
  });
  return (
    <LanguagesContext.Provider value={{ languages, loading }}>
      {children}
    </LanguagesContext.Provider>
  );
}
