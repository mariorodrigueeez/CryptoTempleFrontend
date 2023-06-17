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
    <div className='flex justify-center mt-48 md:mt-0 lg:mt-0'>
      <div className='m-auto my-3 py-3 text-center bg-slate-300 lg:w-3/6 rounded-lg'>
        <h1 className='mb-3 font-semibold text-2xl'>Manage your favorite twitter accounts!</h1>
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
            Add
          </button>


          <div className='flex items-center'>
            <button
              onClick={handleClearButtonClick}
              className='boton mx-1 mr-5'
            >
              Delete accounts
            </button>

            <p htmlFor="timelineHeight" className='mr-1'>Adjust height</p>

            <select id="timelineHeight" className='boton mx-1 w-24 text-center' defaultValue="500" onChange={handleTimelineHeightChange}>
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
