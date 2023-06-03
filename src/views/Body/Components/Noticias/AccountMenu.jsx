// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AccountMenu = ({ handleAddAccount, handleClearAccounts }) => {
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
    handleClearAccounts();
  };

  return (
    <div>
      <div className='m-auto my-5 text-center bg-slate-300 w-1/4 rounded-lg'>
        <h1 className='pt-3 font-semibold text-2xl'>Maneja tus cuentas de twitter favoritas!</h1>
        <div className='text-lg'>
          <input
            className='text-center rounded p-2 w-2/4 overflow-x-auto'
            type="text"
            placeholder="Añade una cuenta"
            value={newAccount}
            onChange={handleInputChange}
          />
          <button onClick={handleAddButtonClick}
            className='m-3 p-2 rounded-lg bg-blue-400 hover:animate-pulse active:animate-ping'>
            Agregar</button>
        </div>

        <div className='flex justify-center text-lg'>
          <h2 className='my-auto'>Para borrar todas las cuentas </h2>
          <div className='my-auto ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </div>
          <button onClick={handleClearButtonClick}
            className='m-3 p-2 rounded-lg bg-blue-400 hover:animate-pulse active:animate-ping'>
            Borrar cuentas</button>
        </div>

      </div>

    </div>
  );
};

export default AccountMenu;