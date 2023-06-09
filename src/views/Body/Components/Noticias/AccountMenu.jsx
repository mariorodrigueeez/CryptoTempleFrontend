// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AccountMenu = ({ handleAddAccount, handleClearAccounts, handleTimelineHeightChange }) => {
  const [newAccount, setNewAccount] = useState('');

  const handleInputChange = (event) => {
    setNewAccount(event.target.value);
  };

  const handleAddButtonClick = () => {
    setNewAccount('');
    if (newAccount.trim() !== "" && newAccount.trim() !== " ") {
      handleAddAccount(newAccount.trim());
    }
  };

  const handleClearButtonClick = () => {
    Swal.fire({
      title: '¿Estás seguro de borrar las cuentas?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      buttonsStyling: false,
      customClass: {
        icon: 'iconoColor',
        confirmButton: 'botonAlerta1',
        cancelButton: 'botonAlerta2',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleClearAccounts();
      }
    });
  };

  return (
    <div className='flex justify-center'>
      <div className='m-auto my-3 py-3 text-center bg-slate-300 lg:w-3/6 md:w-1/2 sm:w-3/4 rounded-lg'>
        <h1 className='mb-3 font-semibold text-2xl'>Maneja tus cuentas de twitter favoritas!</h1>
        <div className='flex items-center justify-between mx-3 text-lg'>
          <input
            className='text-center rounded p-2'
            type="text"
            placeholder="Añade una cuenta"
            value={newAccount}
            onChange={handleInputChange}
          />
          <button
            onClick={handleAddButtonClick}
            className='boton mx-1'
          >
            Agregar
          </button>


          <div className='flex items-center'>
            <button
              onClick={handleClearButtonClick}
              className='boton mx-1 mr-5'
            >
              Borrar cuentas
            </button>

            <p htmlFor="timelineHeight" className='mr-1'>Ajustar la altura</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className=" bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
            <select id="timelineHeight" className='boton mx-2 w-20 bg-green-300' defaultValue="500" onChange={handleTimelineHeightChange}>
              <option value="200">250</option>
              <option value="500">500</option>
              <option value="700">750</option>
              <option value="1000">1000</option>
            </select>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
