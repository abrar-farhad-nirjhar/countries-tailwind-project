import React from 'react';
import ContinentsProvider from '../../contexts/continents-context';
import Container from '../components/container';
import ContinentsList from './continents-list';

export default function Continents() {
  return (
    <ContinentsProvider>
      <Container>
        <ContinentsList />
      </Container>
    </ContinentsProvider>
  );
}
