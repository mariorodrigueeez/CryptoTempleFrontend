// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getallData } from '../../../services/index';

export const Names = () => {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    getallData()
      .then((nombres) => {
        setAllCoins(nombres);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(allCoins);

  return (
    <div className='w-4/5 m-auto'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
            </tr>
          </thead>
          <tbody>
            {allCoins.map((coin) => (
              <tr key={coin.name} className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {coin.nombre}
                </th>
                <td className="px-6 py-4">
                  {coin.precio > 0.1 ? ((coin.precio).toFixed(2)) : (coin.precio)}



                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Names;