// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
//import { getEthPrice } from '../../../services/index';

export const Eth = () => {
  /*const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    getEthPrice()
      .then((precio) => {
        console.log(precio);
        setEthPrice(precio);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
*/
  return (
    <div>
      <p>Precio de Ethereum: // $</p>
    </div>
  )
}
export default Eth;