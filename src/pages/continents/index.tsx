import React from 'react';
import ContinentsProvider from '../../contexts/continents-context';
import Container from '../components/container';

export default function Continents() {
  return (
    <ContinentsProvider>
      <Container>
        <div>Continents</div>
      </Container>
    </ContinentsProvider>
  );
}
