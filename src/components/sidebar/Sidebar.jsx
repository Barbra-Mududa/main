
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.jpg';

const Sidebar = () => {
  return (
    <aside className='hidden md:hidden lg:flex lg:flex-col items-center justify-between w-2/12 p-4 gap-y-4 shadow-lg h-[100vh] bg-primary sticky top-0'>
      <div className='h-1/6'>
        <div className='flex justify-center items-center'>
          <img src={logo} alt='logo' className='w-32' />
        </div>
      </div>

      <div className='h-4/6 py-5'>
        <NavLink to='/' className='text-white text-lg flex items-center mb-6 '>
          Home
          <ChevronRightIcon className='w-6 h-6 ml-2' />
        </NavLink>
        <NavLink to='/catalog' className='text-white text-lg flex items-center'>
          Catalog
          <ChevronRightIcon className='w-6 h-6 ml-2'  />
        </NavLink>
      </div>
      <div className='h-1/6'>
        <NavLink to='/catalog' className='text-white text-lg flex items-center'>
          Logout
          <ChevronRightIcon className='w-6 h-6 ml-2' />
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;

