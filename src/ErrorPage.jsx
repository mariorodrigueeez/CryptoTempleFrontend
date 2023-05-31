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
      <div className="grid place-items-center" id="error-page">
        <p className="my-3 text-2xl">Lo sentimos pero ha surgido un error, sabras perdonarme</p>
        <p className="mb-5 text-lg">Aqui tienes el error para que trates de saber que paso:</p>
        <p className="my-2 mx-2 bg-red-600 text-white">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
