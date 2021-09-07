import React from 'react';
import NavBar from '../nav-bar';

interface Props {
  children: JSX.Element;
}

export default function Container({ children }: Props) {
  return (
    <div className='flex flex-col items-center'>
      <NavBar />
      <br />
      <div className='container'>{children}</div>
      <br />
      <br />
    </div>
  );
}
