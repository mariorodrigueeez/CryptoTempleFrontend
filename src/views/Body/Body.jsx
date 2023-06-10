// eslint-disable-next-line no-unused-vars
import btc from "../../assets/btc.png"
import eth from "../../assets/eth.png"
import doge from "../../assets/doge.png"
import logo from "../../assets/Logo.png"
import separadorTop from "../../assets/separadorTop.png"
import separadorBotton from "../../assets/separadorBot.png"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchNFTData } from '../../services/index';




const Body = () => {
  const [allNft, setAllNft] = useState([]);

  useEffect(() => {
    const slug = "cool-cats-nft";
    console.log(slug);
    // Replace with the desired collection slug
    fetchNFTData(slug)
      .then((data) => {
        setAllNft(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>

      <h1 className='text-center text-2xl font-bold m-4'>Cripto Temple</h1>
      <div className='w-full '>
        <img src={separadorTop} alt="S" className='w-full h-auto' />
      </div>


      <div className='grid grid-cols-3 fondo-gris'>
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
            <Link to="/news">
              <button className='boton'>Noticias</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-screen'>
        <img src={separadorBotton} alt="S" className='w-full h-auto' />
      </div>
    </div>
  );
};

export default Body;