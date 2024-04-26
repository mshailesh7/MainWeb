import React from "react";
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Header() {
  return (
    <div className="relative bg-cover bg-fixed bg-center min-h-screen" style={{ backgroundImage: 'url("../src/Asset/MarketPlaceHomeLanding.png")' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"> {/* Enhanced gradient overlay for text readability */}

      {/* Text container with responsive positioning and sizing */}
      <div className="absolute bottom-5 left-5 right-5 md:bottom-10 md:left-10 md:right-auto text-white transition-all duration-700 ease-in-out transform hover:-translate-y-3">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">Welcome To NatureMark Systems MarketPlace</h1>
        <p className="text-sm md:text-xl lg:text-2xl leading-relaxed">
          Explore our market-leading solutions that empower sustainable growth
          with compliance simplified. Discover the future of environmental
          compliance today.
        </p>
      </div>

      {/* Buttons container with responsive design */}
      <div className="absolute top-5 mt-20 md:top-20 right-5 md:right-10 transition-all duration-700 ease-in-out">
        <div className="flex space-x-2 md:space-x-4">
          <Link to="/login">
            <button
              className="bg-gradient-to-r from-red-500 to-red-800 hover:bg-red-700 text-white font-bold py-2 md:py-3 px-4 md:px-8 rounded-full transition-all duration-300 ease-in-out shadow-xl focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center gap-2"
              aria-label="Login for environmental audits"
            >
              <FaSignInAlt className="text-base md:text-lg" /> 
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              className="bg-gradient-to-r from-red-500 to-red-800 hover:bg-red-700 text-white font-bold py-2 md:py-3 px-4 md:px-8 rounded-full transition-all duration-300 ease-in-out shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center gap-2"
              aria-label="Signup for environmental audits"
            >
              <FaUserPlus className="text-base md:text-lg" />
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;
