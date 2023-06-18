import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { Login } from '../Body/Components/Login/Login';

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="bg-white border-b border-gray-200 flex flex-wrap py-3 w-full">
        <div className=' md:w-3/12 lg:w-3/12 m-auto'>
          <Link to="/home" className="">
            <img src={Logo} className="h-10 mx-auto lg:mx-4 md:mx-4" alt="Logo" />
          </Link>
        </div>

        <div className=" my-auto text-center md:w-6/12 lg:w-6/12 w-full ">
          <div className="flex justify-center">
            <Link to="/home" className="py-2 px-4">
              Home
            </Link>
            <Link to="/crypto" className="py-2 px-4">
              Cryptocurrency
            </Link>
            <Link to="/news" className="py-2 px-4">
              News
            </Link>
          </div>
        </div>

        <div className=" justify-center flex md:w-3/12 lg:w-3/12 w-full ">
          <Login />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
