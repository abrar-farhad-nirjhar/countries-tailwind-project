import { useQuery } from '@apollo/client';
import React, { useState, createContext } from 'react';
import { LANGUAGES } from '../../graphql/query/languages.query';

export const LanguagesContext = createContext({
  languages: [],
});

interface Props {
  children: JSX.Element;
}
export default function LanguagesProvider({ children }: Props) {
  const [languages, setLanguages] = useState<any>([]);
  const { data } = useQuery(LANGUAGES, {
    onCompleted() {
      console.log(data);
      setLanguages(data.languages);
    },
  });
  return (
    <LanguagesContext.Provider value={{ languages }}>
      {children}
    </LanguagesContext.Provider>
  );
}
