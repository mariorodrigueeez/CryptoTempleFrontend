import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { Login } from '../Body/Components/Login/Login';

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between  mx-auto p-4 ">
          <Link to="/home" className="flex items-center lg:mr-56">
            <img src={Logo} className="md:h-8 h-20" alt="Logo" />
          </Link>
          <div className="md:flex md:items-center ">
            <div className="flex  md:flex-row md:items-center">
              <Link
                to="/home"
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:ml-4 mt-2 md:mt-0"
              >
                Home
              </Link>
              <Link
                to="/crypto"
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:ml-4 mt-2 md:mt-0"
              >
                Cryptocurrency
              </Link>
              <Link
                to="/news"
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:ml-4 mt-2 md:mt-0"
              >
                News
              </Link>
            </div>

          </div>
          <div className="mt-2 md:mt-0  ">
            <Login />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
