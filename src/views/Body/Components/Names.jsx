import React, { useEffect, useState } from 'react';
import { getallData } from '../../../services/index';

export const Names = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const coinsPerPage = 25;

  useEffect(() => {
    getallData()
      .then((nombres) => {
        setAllCoins(nombres);
        setTotalPages(Math.ceil(nombres.length / coinsPerPage));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function formatVolume(volume) {
    const million = 1000000;
    const billion = 1000000000;
    const trillion = 1000000000000;

    if (volume >= trillion) {
      return `$${(volume / trillion).toFixed(2)}T`;
    } else if (volume >= billion) {
      return `$${(volume / billion).toFixed(2)}B`;
    } else if (volume >= million) {
      return `$${(volume / million).toFixed(2)}M`;
    } else {
      return `$${volume}`;
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }
  function handleCurrentPage() {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }


  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = allCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <div>


      <div className='w-4/5 h-96 overflow-y-auto m-auto border rounded-lg mt-3'>
        <table className="table-auto min-w-full text-center">
          <thead className="top-0 sticky text-gray-700 uppercase bg-gray-100 border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                Rank
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                24h %
              </th>
              <th scope="col" className="px-6 py-3">
                7d %
              </th>
              <th scope="col" className="px-6 py-3">
                30d %
              </th>
              <th scope="col" className="px-6 py-3">
                Volume
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {currentCoins.map((coin) => (
              <tr key={coin.name} className="bg-white">
                <th scope="row" className="px-6 py-4">
                  {coin.rank}
                </th>
                <th scope="row" className="px-6 py-4 flex items-center ">
                  <div className='mr-10 '>
                    <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} className='h-8' alt="logo" />
                  </div>
                  <div className=' my-auto'>
                    {coin.nombre}
                  </div>
                </th>
                <td className="px-6 py-4">
                  {coin.precio > 0.01 ? ((coin.precio).toFixed(2)) : ((coin.precio).toFixed(8))}$
                </td>
                {(coin.valor24h < 0 ? (
                  <td className="px-6 py-4 text-red-500">
                    {(coin.valor24h).toFixed(1)} %
                  </td>)
                  : (
                    <td className="px-6 py-4 text-green-500">
                      {(coin.valor24h).toFixed(1)} %
                    </td>)
                )}
                {(coin.valor7d < 0 ? (
                  <td className="px-6 py-4 text-red-500">
                    {(coin.valor7d).toFixed(1)} %
                  </td>)
                  : (
                    <td className="px-6 py-4 text-green-500">
                      {(coin.valor7d).toFixed(1)} %
                    </td>)
                )}
                {(coin.valor30d < 0 ? (
                  <td className="px-6 py-4 text-red-500">
                    {(coin.valor30d).toFixed(1)} %
                  </td>)
                  : (
                    <td className="px-6 py-4 text-green-500">
                      {(coin.valor30d).toFixed(1)} %
                    </td>)
                )}
                <td className="px-6 py-4">
                  {formatVolume(coin.volume24h)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className="grid grid-cols-3 w-4/5  gap-4 m-auto mt-3 p-2">
        <div className='my-auto'>
          <p className='text-xl'>
            Página {currentPage} de {totalPages}
          </p>
        </div>

        <div className='  m-auto flex'>
          <button
            className="boton mx-2"
            onClick={handlePreviousPage}
          >
            Anterior
          </button>
          <div className="mx-3 flex my-auto">
            {(currentPage - 1) === 0 ? (
              <button className="mx-6"></button>
            ) : (
              <button onClick={handlePreviousPage} className="botonPagination mx-3">{currentPage - 1}</button>
            )}
            <button className="botonPagination mx-3">
              {currentPage}
            </button>
            {(currentPage) === totalPages ? (
              <button className="mx-6"></button>
            ) : (
              <button onClick={handleNextPage} className="botonPagination mx-3">{currentPage + 1}</button>
            )}
          </div>
          <button
            className="boton mx-2"
            onClick={handleNextPage}
          >
            Siguiente
          </button>
        </div>


      </div>
    </div>
  );
};

export default Names;
