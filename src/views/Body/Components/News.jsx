// eslint-disable-next-line no-unused-vars
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const News = () => {


  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="BTC_Archive"
        options={{ height: 1000 }}
      />
    </div>
  );
};

export default News;