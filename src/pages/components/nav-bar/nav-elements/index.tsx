import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  styles?: string;
}

export default function NavElements({ styles }: Props) {
  return (
    <div className={styles || ''}>
      <Link className='mx-5 font-bold hover:bg-green-700 p-2 rounded-md' to='/'>
        Countries
      </Link>
      <Link
        className='mx-5 font-bold hover:bg-green-700 p-2 rounded-md'
        to='/continents'
      >
        Continents
      </Link>
      <Link
        className='mx-5 font-bold hover:bg-green-700 p-2 rounded-md'
        to='/languages'
      >
        Languages
      </Link>
    </div>
  );
}
