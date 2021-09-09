import React, { useContext } from 'react';
import { LanguagesContext } from '../../contexts/languages-context';
import Container from '../components/container';
import LanguagesList from '../components/languages-list';

export default function Languages() {
  const { languages } = useContext(LanguagesContext);
  return (
    <Container>
      <LanguagesList languages={languages} />
    </Container>
  );
}
