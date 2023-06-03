// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import AccountMenu from './AccountMenu';

export const News = () => {
  const [twitterAccounts, setTwitterAccounts] = useState([]);

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