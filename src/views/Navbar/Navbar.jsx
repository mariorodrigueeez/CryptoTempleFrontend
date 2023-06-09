// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png'
import { Login } from '../Body/Components/Login/Login';

export const Navbar = () => {
  return (
    <div className='top-0 sticky'>
      <nav className=" bg-white border-b border-gray-200 ">
        <div className="grid grid-cols-3 items-center justify-between mx-auto p-4">
          <Link to="/home" className="flex items-center ">
            <img src={Logo} className="md:h-8 h-20" alt="Logo" />
          </Link>
          <div className="items-center md:flex md:order-1 ">
            <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/criptomonedas"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">
                  Criptomonedas
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">
                  Noticias
                </Link>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">NFTs</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">Blockchain</a>
              </li>

            </ul>
          </div>
          <div className="justify-end md:flex md:order-2 ">
            <Login />

          </div>
        </div>
      </nav>

    </div>
  )
}
export default Navbar;