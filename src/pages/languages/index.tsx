import React from 'react';
import LanguagesProvider from '../../contexts/languages-context';
import Container from '../components/container';
import LanguagesList from './languages-list';

export default function Languages() {
  return (
    <LanguagesProvider>
      <Container>
        <LanguagesList />
      </Container>
    </LanguagesProvider>
  );
}
