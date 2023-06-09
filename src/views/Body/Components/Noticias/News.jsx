// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import AccountMenu from './AccountMenu';

export const News = () => {
  const [twitterAccounts, setTwitterAccounts] = useState([]);
  const [timelineHeight, setTimelineHeight] = useState(500);
  const [timelineKey, setTimelineKey] = useState(Date.now()); // Agrega la clave inicial usando Date.now()

  useEffect(() => {
    const savedAccounts = localStorage.getItem('twitterAccounts');
    if (savedAccounts) {
      setTwitterAccounts(JSON.parse(savedAccounts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('twitterAccounts', JSON.stringify(twitterAccounts));
  }, [twitterAccounts]);

  const handleAddAccount = (newAccount) => {
    setTwitterAccounts([...twitterAccounts, { screenName: newAccount }]);
  };

  const handleClearAccounts = () => {
    setTwitterAccounts([]);
  };

  const handleTimelineHeightChange = (e) => {
    const newHeight = parseInt(e.target.value);
    setTimelineHeight(newHeight);
    setTimelineKey(Date.now()); // Actualiza la clave para que el componente se recargue
  };

  return (
    <div>
      <AccountMenu
        handleAddAccount={handleAddAccount}
        handleClearAccounts={handleClearAccounts}
        handleTimelineHeightChange={handleTimelineHeightChange} // Agrega la prop handleTimelineHeightChange al componente AccountMenu
      />
      <div className='grid grid-cols-4 gap-4'>
        {twitterAccounts.map((account, index) => (
          <div key={index} className='m-1'>
            <TwitterTimelineEmbed
              key={timelineKey} // Utiliza la clave en el componente TwitterTimelineEmbed
              sourceType="profile"
              screenName={account.screenName}
              options={{ height: timelineHeight }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
