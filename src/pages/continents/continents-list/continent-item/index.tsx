import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  continent: any;
}
export default function ContinentItem({ continent }: Props) {
  return (
    <div className='border-green-500 border-2 m-2 p-5 lg:w-1/4 md:w-1/3  w-full rounded shadow-lg hover:opacity-60'>
      <Link to={`/continents/${continent.code}`}>
        <div className='flex items-center gap-10 w-full'>
          <div className='flex flex-col'>
            <span className='text-md font-bold'>{continent.name}</span>
            <span className='text-md font-medium'>{continent.code}</span>
            <span className='text-md'>
              Countries: {continent.countries.length}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
