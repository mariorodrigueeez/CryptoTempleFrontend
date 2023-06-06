// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import AccountMenu from './AccountMenu';

export const News = () => {
  // Estado para almacenar las cuentas de Twitter
  const [twitterAccounts, setTwitterAccounts] = useState([]);

  // Cargar las cuentas almacenadas en el almacenamiento local al iniciar
  useEffect(() => {
    const savedAccounts = localStorage.getItem('twitterAccounts');
    if (savedAccounts) {
      setTwitterAccounts(JSON.parse(savedAccounts));
    }

  }, []);

  // Guardar las cuentas en el almacenamiento local cuando cambian
  useEffect(() => {
    localStorage.setItem('twitterAccounts', JSON.stringify(twitterAccounts));
  }, [twitterAccounts]);

  // Agregar una nueva cuenta a la lista
  const handleAddAccount = (newAccount) => {
    setTwitterAccounts([...twitterAccounts, { screenName: newAccount }]);
  };

  // Borrar todas las cuentas de la lista
  const handleClearAccounts = () => {
    setTwitterAccounts([]);
  };

  return (
    <div>
      <AccountMenu
        handleAddAccount={handleAddAccount}
        handleClearAccounts={handleClearAccounts}
      />

      <div className='grid grid-cols-4 gap-4'>
        {twitterAccounts.map((account, index) => (
          <div key={index} className='m-1'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={account.screenName}
              options={{ height: 1000 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
