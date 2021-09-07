import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  country: any;
}

export default function CountryItem({ country }: Props) {
  return (
    <div className='border-green-500 border-2 m-2 p-5 lg:w-1/4 md:w-1/3  w-full rounded shadow-lg hover:opacity-60'>
      <Link to=''>
        <div className='flex items-center gap-10 w-full'>
          <img
            src={`https://www.countryflags.io/${country.code}/shiny/64.png`}
          />
          <div className='flex flex-col'>
            <span className='text-md font-bold'>{country.name}</span>
            <span className='text-md font-medium'>{country.code}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
