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
    <div className='w-4/5 h-96 overflow-y-auto m-auto border rounded-lg mt-3'>
      <table className="table-auto min-w-full">
        <thead className="top-0 sticky text-gray-700 uppercase bg-gray-50">
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
  );
};

export default Names;