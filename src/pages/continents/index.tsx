import React, { useContext } from 'react';
import { ContinentsContext } from '../../contexts/continents-context';
import Container from '../components/container';
import Loading from '../components/loading';
import ContinentsList from './continents-list';

export default function Continents() {
  const { loading } = useContext(ContinentsContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <ContinentsList />
    </Container>
  );
}
