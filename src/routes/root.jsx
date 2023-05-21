// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router';


export default function Root() {
  return (
    <div>
      <div id="detail">
        <Outlet />
      </div>
    </div>

  );
}
