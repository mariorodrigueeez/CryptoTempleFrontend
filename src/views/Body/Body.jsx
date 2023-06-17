import React, { useEffect, useState } from 'react';
import btc from "../../assets/btc.png";
import eth from "../../assets/eth.png";
import doge from "../../assets/doge.png";
import logo from "../../assets/Logo.png";
import github from "../../assets/github.png";
import separadorTop from "../../assets/separadorTop.png";
import separadorBotton from "../../assets/separadorBot.png";
import { Link } from 'react-router-dom';
import { Graphic } from './Components/Graphic';
import { LoginBody } from './Components/Login/LoginBody';

const Body = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <h1 className='titulo w-1/2 m-auto my-5 mb-11 animate-pulse'>Crypto <br /> Temple</h1>
      <div className='w-full '>
        <img src={separadorTop} alt="S" className='w-full h-auto' />
      </div>

      <div className='fondo-gris'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8'>
          <div className='text-center'>
            <p className='text-xl sm:text-2xl p-4 sm:p-8'>Follow your favourite cryptos</p>
            <div className='flex justify-center mt-3'>
              <img src={btc} alt="logo" className='h-12 sm:h-10 md:h-12 lg:h-20 mx-3 sm:mx-6 animate-bounce' />
              <img src={eth} alt="logo" className='h-12 sm:h-10 md:h-12 lg:h-20 mx-3 sm:mx-6 animate-bounce' />
              <img src={doge} alt="logo" className='h-12 sm:h-10 md:h-12 lg:h-20 mx-3 sm:mx-6 animate-bounce' />
            </div>
          </div>
          <div className='text-center'>
            <p className='text-xl sm:text-2xl p-4 sm:p-8'>All in one place!</p>
            <div className='flex justify-center mt-3'>
              <img src={logo} alt="logo" className='h-12 sm:h-20 mx-3 sm:mx-6' />
            </div>
          </div>
          <div className='text-center'>
            <p className='text-xl sm:text-2xl p-4 sm:p-8'>Check the latest news about cryptocurrency</p>
            <div className='flex justify-center mt-3'>
              <Link to="/news">
                <button className='boton'>Noticias</button>
              </Link>
            </div>
          </div>
        </div>
        <hr className="styled-hr mt-8 sm:mt-10 w-10/12 m-auto" />

        <div className='w-full sm:w-3/4 m-auto flex flex-col sm:flex-row justify-center mt-9'>
          <div className='my-4 sm:my-auto text-center text-xl sm:text-2xl p-4 sm:p-8 text-slate-600'>
            <p>Connect your wallet to see your balance</p>
          </div>
          <div className='my-4 sm:my-auto m-auto md:mx-0'>
            <LoginBody />
          </div>
        </div>
      </div>
      <div className=''>
        <img src={separadorBotton} alt="S" className='w-full h-auto' />
      </div>
      <div className='w-3/4 m-auto py-2 pt-8'>
        <h2 className='text-center text-4xl sm:text-5xl p-4 sm:p-8 uppercase text-slate-600'>Bitcoin price</h2>
        <Graphic />
      </div>
      <div className='w-full mt-6'>
        <img src={separadorTop} alt="S" className='w-full h-auto' />
      </div>

      <div className='fondo-gris'>
        <div className='w-3/4 m-auto py-2 pt-8'>
          <h2 className='text-center text-2xl sm:text-3xl p-4 sm:p-6 text-slate-600'>Made by Mario Rodríguez García - Tenorio</h2>
          <h2 className='text-center text-xl sm:text-2xl p-2 sm:p-1 text-slate-500'>Frontend developer</h2>
          <a href="https://github.com/mariorodrigueeez?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="logo" className='mt-4 m-auto h-12 sm:h-16 botonImg' />
          </a>
        </div>
      </div>
      <div className='mb-4'>
        <img src={separadorBotton} alt="S" className='w-full h-auto' />
      </div>
      {showButton && (
        <button
          className="fixed bottom-10 right-10 boton"
          onClick={handleScrollToTop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Body;
