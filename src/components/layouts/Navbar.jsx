import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const { login, register } = useKindeAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between relative">
      <div className="text-2xl font-bold">
        <Link to='/' className="hover:text-gray-400" onClick={handleLinkClick}>ShopFusion</Link>
      </div>
      <div className="hidden md:flex space-x-4">
      <Link to="/cart" className="bg-white  hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-2xl">Cart</Link>
        <Link to="/contact" className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-2xl">Contact</Link>
        <button 
          onClick={register} 
          type="button" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
        >
          Register
        </button>
        <button 
          onClick={login} 
          type="button" 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl"
        >
          Log In
        </button>
      </div>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
          <FiMenu />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 z-50">
          <Link to="/contact" className="hover:text-gray-400" onClick={handleLinkClick}>Contact</Link>
          <Link to="/cart" className="hover:text-gray-400" onClick={handleLinkClick}>Cart</Link>
          <button 
            onClick={() => {
              register();
              handleLinkClick();
            }} 
            type="button" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
          <button 
            onClick={() => {
              login();
              handleLinkClick();
            }} 
            type="button" 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
