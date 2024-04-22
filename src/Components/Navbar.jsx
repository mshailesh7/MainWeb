import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./NavbarDropDown";

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className="bg-green-800 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2 h-20">
        <div className="flex">
          <Link
            to="/login"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={() => setShowOptions(false)}
          >
            <img
              src="src/Asset/white-logo.png"
              className="w-12 h-12"
              alt="NatureMark Systems Logo"
            />
            <span className="text-xl md:text-3xl font-bold text-white transition duration-300 ease-in-out max-lgp:hidden">
              NatureMark Systems
            </span>
          </Link>
        </div>
        <div
          className={`${
            showOptions
              ? "max-md:flex max-md:mt-96 bg-green-700 max-md:gap-y-12 max-md:gap-x-8 max-md:w-full "
              : "hidden"
          } flex-col md:flex-row items-center md:space-x-8 w-full md:flex md:w-auto transition-all ease-in-out duration-300`}
        >
          <Link
            to="/login"
            className="py-2 px-4 text-white font-bold hover:bg-green-700 rounded transition duration-300 ease-in-out"
            onClick={() => setShowOptions(false)}
          >
            Home
          </Link>
          <Dropdown />
          <Link
            to="/News_Blogs"
            className="py-2 px-4 text-white font-bold hover:bg-green-700 rounded transition duration-300 ease-in-out"
            onClick={() => setShowOptions(false)}
          >
            News & Blogs
          </Link>
          <Link
            to="/aboutus"
            className="py-2 px-4 text-white font-bold hover:bg-green-700 rounded transition duration-300 ease-in-out"
            onClick={() => setShowOptions(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="py-2 px-4 text-white font-bold hover:bg-green-700 rounded transition duration-300 ease-in-out"
            onClick={() => setShowOptions(false)}
          >
            Contact
          </Link>
        </div>
        <button
          onClick={toggleOptions}
          className="rounded-lg p-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 md:hidden" // Only show this button on md and smaller screens
          aria-expanded={showOptions}
          aria-label="Toggle Navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
