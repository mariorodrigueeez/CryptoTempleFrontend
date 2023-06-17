// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRouteError } from 'react-router-dom';
import Navbar from './views/Navbar/Navbar';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-28">
        <h1 className="text-4xl font-bold text-red-600">Oops, something went wrong! </h1>
        <p className="text-lg text-gray-700 mb-4">We apologize for the inconvenience. </p>
        <div className="bg-red-600 text-white px-6 py-3 rounded-lg">
          <p className="text-lg">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
