// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png'

export const Navbar = () => {
  return (
    <div className='top-0 sticky'>
      <nav className=" bg-white border-b border-gray-200 ">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center bg-slate-700">
            <img src={Logo} className="md:h-8 h-20" alt="Logo" />
          </Link>
          <div className="items-center justify-between md:flex md:order-1 bg-orange-600">
            <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/"
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
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">NFTs</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">Blockchain</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">Conócenos</a>
              </li>
            </ul>
          </div>
          <div className="md:flex md:order-2 hidden bg-orange-600">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg p-2">Login</button>
          </div>
        </div>
      </nav>

    </div>
  )
}
export default Navbar;