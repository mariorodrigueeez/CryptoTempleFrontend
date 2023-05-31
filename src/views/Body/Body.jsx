// eslint-disable-next-line no-unused-vars
import React from 'react';
import btc from "../../assets/btc.png"
import eth from "../../assets/eth.png"
import doge from "../../assets/doge.png"
import logo from "../../assets/Logo.png"



const Body = () => {

  return (
    <div>
      <h1 className='text-center text-2xl font-bold m-4'>Cripto Temple</h1>
      <div className='grid grid-cols-3  m-4'>
        <div className=' text-center'>
          <p className='text-2xl p-8'>Sigue el precio de tus monedas favoritas</p>
          <div className='flex justify-center mt-3'>
            <img src={btc} alt="logo" className='h-20 mx-6 animate-bounce' />
            <img src={eth} alt="logo" className='h-20 mx-6 animate-bounce' />
            <img src={doge} alt="logo" className='h-20 mx-6 animate-bounce' />
          </div>

        </div>
        <div className=' text-center'>
          <p className='text-2xl p-8'>Todo en una sola plataforma!</p>
          <div className='flex justify-center mt-3'>
            <img src={logo} alt="logo" className='h-20 mx-6 ' />
          </div>
        </div>
        <div className='text-center'>
          <p className='text-2xl p-8'>Sigue las ultimas novedades del mundo Crypto!</p>
          <div className='flex justify-center mt-3'>
            <button className='bg-blue-400 p-3 rounded-lg hover:bg-yellow-400 animate-pulse'>Noticias</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Body;