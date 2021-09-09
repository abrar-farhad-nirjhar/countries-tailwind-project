import React, { useContext } from 'react';
import { LanguagesContext } from '../../contexts/languages-context';
import Container from '../components/container';
import LanguagesList from '../components/languages-list';
import Loading from '../components/loading';

export default function Languages() {
  const { languages, loading } = useContext(LanguagesContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <LanguagesList languages={languages} />
    </Container>
  );
}
