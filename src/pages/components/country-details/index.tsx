import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountryContext } from '../../../contexts/country-context';
import Container from '../container';
import LanguagesList from '../languages-list';
import Loading from '../loading';

export default function CountryDetails() {
  const { country, loading } = useContext(CountryContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <div>
        <div className='flex items-center gap-6 w-full justify-center'>
          <img
            src={`https://www.countryflags.io/${country.code}/shiny/64.png`}
            alt={country.code}
          />
          <div className='flex flex-col'>
            <span className='text-md font-bold text-green-500'>
              {country.name}
            </span>
            <span className='text-md font-medium text-green-500'>
              {country.code}
            </span>
          </div>
        </div>

        <br />
        <Link to={`/continents/${country.continent?.code}`}>
          <div className='text-center text-2xl font-bold leading-7 text-green-500 sm:text-3xl sm:truncate'>
            {country.continent?.name}
          </div>
        </Link>
        <br />
        <div className='flex gap-10 justify-center items-center'>
          <span className='text-md font-bold text-green-500 font-medium'>
            {country.continent?.code}
          </span>

          <span className='text-md font-bold text-green-500'>
            Countries: {country.continent?.countries?.length}
          </span>
        </div>
        <br />
        <div className='text-center text-2xl font-bold leading-7 text-green-500 sm:text-3xl sm:truncate'>
          Languages
        </div>
        <br />
        {country.languages && <LanguagesList languages={country?.languages} />}
      </div>
    </Container>
  );
}
