import React from "react";
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Header() {
  return (
    <div className="relative bg-cover bg-fixed bg-center min-h-screen" style={{ backgroundImage: 'url("../src/Asset/MarketPlaceHomeLanding.png")' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      {/* Text container */}
      <div className="absolute bottom-20 left-5 right-5 md:bottom-40 md:left-10 md:right-auto text-white transition-all duration-700 ease-in-out transform hover:-translate-y-3">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">Welcome To NatureMark Systems MarketPlace</h1>
        <p className="text-sm md:text-xl lg:text-2xl leading-relaxed">
          Explore our market-leading solutions that empower sustainable growth
          with compliance simplified. Discover the future of environmental
          compliance today.
        </p>
      </div>

      {/* Buttons container  */}
      <div className="absolute bottom-8 left-5 md:bottom-20 md:left-10 transition-all duration-700 ease-in-out">
      <div className="mt-8 space-x-4 flex justify-center items-center">
              <Link to="/login">
                <button
                  className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-8 md:px-14 rounded-lg transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center gap-2"
                  aria-label="Login for environmental audits"
                >
                  <FaSignInAlt className="text-lg " />
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 md:px-14 rounded-lg transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center gap-2"
                  aria-label="Signup for environmental audits"
                >
                  <FaUserPlus className="text-lg " />
                  Signup
                </button>
              </Link>
            </div>
      </div>
    </div>
  );
}

export default Header;
