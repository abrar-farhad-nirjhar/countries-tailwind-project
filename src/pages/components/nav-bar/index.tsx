import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WorldWide from '../../../assets/worldwide.png';
import { IconClose, IconMenu } from '../_icons';
import NavElements from './nav-elements';
export default function NavBar() {
  const [menuCollapsed, setMenuCollapsed] = useState<Boolean>(false);
  return (
    <div className='w-full bg-green-500 text-white'>
      <nav className='w-full flex justify-between items-center p-3 '>
        <div className='text-lg font-bold flex items-center gap-5'>
          <img src={WorldWide} alt='globe-logo' className='w-10' />
          <Link to='/'>Countries Project</Link>
        </div>
        <div className='hidden sm:block'>
          <NavElements />
        </div>
        <div
          className='sm:hidden flex flex-col'
          onClick={() => setMenuCollapsed(!menuCollapsed)}
        >
          {menuCollapsed ? <IconClose /> : <IconMenu />}
        </div>
      </nav>
      <div className='sm:hidden'>
        {menuCollapsed && (
          <NavElements styles={'flex flex-col items-center pt-5 pb-5'} />
        )}
      </div>
    </div>
  );
}
