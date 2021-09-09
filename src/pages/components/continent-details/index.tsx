import React, { useContext } from 'react';
import { ContinentContext } from '../../../contexts/continent-context';
import Container from '../container';
import CountryList from '../countries-list';
import Loading from '../loading';
export default function ContinentDetails() {
  const { continent, loading } = useContext(ContinentContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <div>
        <div className='text-center text-5xl font-bold text-green-500'>
          {continent?.name}
        </div>
        <br />
        <div className='text-center text-md font-bold text-green-500'>
          {continent?.code}
        </div>
        <div className='text-center text-md font-bold text-green-500'>
          Countries
        </div>
        <br />
        {continent && <CountryList countries={continent?.countries} />}
      </div>
    </Container>
  );
}
