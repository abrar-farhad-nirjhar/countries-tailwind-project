import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='w-full flex justify-between items-center p-5 bg-green-500 text-white'>
      <div className='text-lg font-bold'>
        <Link to='/'>Countries Project</Link>
      </div>
      <div>
        <Link className='mx-5 font-semibold' to='/'>
          Countries
        </Link>
        <Link className='mx-5 font-semibold' to='/continents'>
          Continents
        </Link>
        <Link className='mx-5 font-semibold' to='/languages'>
          Languages
        </Link>
      </div>
    </nav>
  );
}
