import React, { useContext } from 'react';
import { ContinentsContext } from '../../../contexts/continents-context';
import ContinentItem from './continent-item';

export default function ContinentsList() {
  const { continents } = useContext(ContinentsContext);
  const continentsList = continents.map((continent, index) => (
    <ContinentItem continent={continent} key={index} />
  ));
  return (
    <div className='flex justify-evenly flex-wrap w-100'>{continentsList}</div>
  );
}
