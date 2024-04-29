import React from "react";
import AboutUs from "./AboutUs.jsx";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const PhotoGallery = () => (
  <div className="bg-white mt-10 py-8">
    <div className="container mx-auto">
      <h2 className="text-5xl font-bold mb-6 text-center text-black" draggable>
        Photo Gallery
      </h2>
      <div className="flex flex-wrap justify-center">
        {Array.from({ length: 6 }, (_, i) => (
          <img
            key={i}
            src={`src/Asset/Image${i + 1}.png`}
            alt={`Image ${i + 1}`}
            className="w-96 scale-75 h-auto rounded-lg shadow-md hover:shadow-xl duration-300 transition-all hover:scale-90 hover:cursor-pointer"
          />
        ))}
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 py-12 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center underline decoration-green-600 underline-offset-8 mb-4">
        Get Latest Updates
      </h2>
      <p className="mt-6 max-w-lg mx-auto text-center text-lg">
        Join our newsletter to stay updated with the latest news and special
        announcements.
      </p>
      <form className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-center justify-center">
        <div className="flex-grow flex md:max-w-xl">
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            className="flex-1 rounded-l-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 py-3 px-8 rounded-r-md transition duration-300 ease-in-out shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <span className="text-sm uppercase tracking-wider">
          Follow us on social media
        </span>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/company/nature-mark-sys/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 transition-colors"
          >
            <FaLinkedin className="text-3xl hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.facebook.com/YourFacebookPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <FaFacebook className="text-3xl hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.instagram.com/Naturemarksystems"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 transition-colors"
          >
            <FaInstagram className="text-3xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <div className="flex flex-col">
    <div
      className="relative text-center bg-cover bg-center min-h-[100vh]"
      style={{ backgroundImage: 'url("../src/Asset/MainHomeLanding.png")' }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-10">
        <div className="bg-black bg-opacity-80 p-6 md:p-12 rounded-lg shadow-xl">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Environmental Audits Made Easy
          </h1>
          <p className="text-xl md:text-2xl text-white mt-4 md:mt-6">
            We provide eco-friendly engineering solutions for sustainable
            development.
          </p>
          <div className="mt-8 space-x-4 flex justify-center items-center">
            {" "}
            {/* Centering and adding space between buttons */}
            <Link to="/login">
              <button
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 md:px-14 rounded-lg transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center gap-2"
                aria-label="Login for environmental audits"
              >
                <FaSignInAlt className="text-lg animate-bounce" />{" "}
                {/* Icon for the login button */}
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-8 md:px-14 rounded-lg transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center gap-2"
                aria-label="Signup for environmental audits"
              >
                <FaUserPlus className="text-lg animate-bounce" />{" "}
                {/* Icon for the signup button */}
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <AboutUs />

    <PhotoGallery />
    <Footer />
  </div>
);

export default Home;
