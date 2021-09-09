import React from 'react';
import { useParams } from 'react-router';
import ContinentProvider from '../../contexts/continent-context';
import Details from '../components/continent-details';
export default function ContinentDetails() {
  const params: any = useParams();
  return (
    <ContinentProvider code={params.code}>
      <Details />
    </ContinentProvider>
  );
}
