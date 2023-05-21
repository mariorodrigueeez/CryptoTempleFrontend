// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getBtcPrice } from '../../services/index';

const Body = () => {
  const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    getBtcPrice()
      .then((price) => {
        setBtcPrice(price);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Criptomonedas</h1>
      <p>Precio de Bitcoin: {btcPrice} $</p>
    </div>
  );
};

export default Body;