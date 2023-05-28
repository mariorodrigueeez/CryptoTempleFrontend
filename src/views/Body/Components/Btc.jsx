// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
//import { getBtcPrice } from '../../../services/index';

export const Btc = () => {
  /*const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    getBtcPrice()
      .then((precio) => {
        console.log(precio);
        setBtcPrice(precio);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);*/

  return (
    <div>
      <p>Precio de Bitcoin: // $</p>
    </div>
  )
}
export default Btc;