// Layout.js
import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-grow p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
