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
        setTotalPages(Math.ceil((nombres ?? []).length / coinsPerPage));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function formatVolume(volume) {
    const thousand = 1000;
    const million = 1000000;
    const billion = 1000000000;
    const trillion = 1000000000000;

    if (volume >= trillion) {
      return `$${(volume / trillion).toFixed(2)}T`;
    } else if (volume >= billion) {
      return `$${(volume / billion).toFixed(2)}B`;
    } else if (volume >= million) {
      return `$${(volume / million).toFixed(2)}M`;
    } else if (volume >= thousand) {
      return `$${(volume / thousand).toFixed(2)}K`;
    } else {
      return `$${volume}`;
    }
  }

  function formatNum(num) {
    const thousand = 1000;
    const million = 1000000;
    const billion = 1000000000;
    const trillion = 1000000000000;

    if (num >= trillion) {
      return `${(num / trillion).toFixed(2)}T`;
    } else if (num >= billion) {
      return `${(num / billion).toFixed(2)}B`;
    } else if (num >= million) {
      return `${(num / million).toFixed(2)}M`;
    } else if (num >= thousand) {
      return `${(num / thousand).toFixed(2)}K`;
    } else {
      return `${num}`;
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
  const currentCoins = allCoins.length > 0 ? allCoins.slice(indexOfFirstCoin, indexOfLastCoin) : [];

  return (
    <div>


      <div className='mx-7 h-tabla overflow-y-auto m-auto border rounded-lg mt-3'>
        <table className="table-auto min-w-full text-center">
          <thead className="top-0 sticky text-gray-700 uppercase bg-gray-100 border-b">
            <tr>
              <th scope="col" className="px-4 py-3">
                Rank
              </th>
              <th scope="col" className="py-3">
                Name
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                24h%
              </th>
              <th scope="col" className="px-4 py-3">
                7d%
              </th>
              <th scope="col" className="px-4 py-3">
                30d%
              </th>
              <th scope="col" className="px-4 py-3">
                Volume
              </th>
              <th scope="col" className="px-4 py-3">
                V change
              </th>
              <th scope="col" className="px-4 py-3">
                Circulating supply
              </th>
              <th scope="col" className="px-4 py-3">
                Max supply
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {currentCoins.map((coin) => (
              <tr key={coin.name} className="bg-white">
                <th scope="row" className="px-4 py-4">
                  {coin.rank}
                </th>
                <th scope="row" className=" py-4  ">
                  <div className='flex'>
                    <div className='flex-none m-auto   w-8'>
                      <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} className='h-8 w-8' alt="logo" />
                    </div>
                    <div className='grow  my-auto hidden lg:block  w-20'>
                      {coin.nombre}
                    </div>
                  </div>
                </th>
                <td className="px-4 py-4">
                  {coin.precio > 0.01 ? ((coin.precio).toFixed(2)) : ((coin.precio).toFixed(8))}$
                </td>
                {(coin.valor24h < 0 ? (
                  <td className="px-4 py-4 text-red-500">
                    {(coin.valor24h).toFixed(1)} %
                  </td>)
                  : (
                    <td className="px-4 py-4 text-green-500">
                      {(coin.valor24h).toFixed(1)} %
                    </td>)
                )}
                {(coin.valor7d < 0 ? (
                  <td className="px-4 py-4 text-red-500">
                    {(coin.valor7d).toFixed(1)} %
                  </td>)
                  : (
                    <td className="px-4 py-4 text-green-500">
                      {(coin.valor7d).toFixed(1)} %
                    </td>)
                )}
                {(coin.valor30d < 0 ? (
                  <td className="px-4 py-4 text-red-500">
                    {(coin.valor30d).toFixed(1)} %
                  </td>)
                  : (
                    <td className="px-4 py-4 text-green-500">
                      {(coin.valor30d).toFixed(1)} %
                    </td>)
                )}
                <td className="px-4 py-4">
                  {formatVolume(coin.volume24h)}
                </td>
                {(coin.volume_change_24h < 0 ? (
                  <td className="px-4 py-4 text-red-500">
                    {(coin.volume_change_24h).toFixed(0)} %
                  </td>)
                  : (
                    <td className="px-4 py-4 text-green-500">
                      {(coin.volume_change_24h).toFixed(0)} %
                    </td>)
                )}
                <td className="px-4 py-4">
                  {formatNum(coin.circulating_supply)}
                </td>
                {(coin.max_supply === null ? (
                  <td className="px-4 py-4 w-20">
                    -
                  </td>)
                  : (
                    <td className="px-4 py-4">
                      {formatNum(coin.max_supply)}
                    </td>)
                )}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className="grid grid-cols-3 w-4/5  gap-4 m-auto mt-3 p-2">
        <div className='my-auto'>
          <p className='text-xl'>
            Page {currentPage} of {totalPages}
          </p>
        </div>

        <div className='  m-auto flex'>
          <button
            className="boton mx-2"
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <div className="mx-3 md:flex my-auto">
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
            Following
          </button>
        </div>


      </div>
    </div>
  );
};

export default Names;
