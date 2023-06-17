// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../views/Navbar/Navbar';


export default function Root() {
  return (
    <div>
      <Navbar />
      <div id="detail" className='mt-28'>
        <Outlet />
      </div>
    </div>

  );
}
