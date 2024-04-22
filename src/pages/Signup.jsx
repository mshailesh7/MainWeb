import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-neutral-100">
      <div className="bg-white flex flex-col sm:flex-row-reverse border-2 sm:max-w-screen-xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex-grow p-8 flex flex-col justify-center">  {/* Adjusted width setting */}
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Create Your Account
          </h2>
          <form className="mt-2 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                required
                className="bg-white rounded-lg shadow-sm p-3 w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                placeholder="Name"
              />
              <input
                type="email"
                autoComplete="email"
                required
                className="bg-white rounded-lg shadow-sm p-3 w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                placeholder="Email"
              />
              <div className="relative flex items-center">
                <input
                  type={show ? "text" : "password"}
                  required
                  className="bg-white rounded-lg shadow-sm p-3 flex-grow border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Password"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500">
                  {show ? (
                    <IoEyeSharp
                      className="text-xl"
                      onClick={() => setShow(!show)}
                    />
                  ) : (
                    <FaEyeSlash
                      className="text-xl"
                      onClick={() => setShow(!show)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center text-sm text-gray-900">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <span className="ml-2">
                  I Agree to the terms and conditions
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex-grow bg-gradient-to-br from-green-500 to-green-900 text-white flex flex-col items-center justify-center p-8 space-y-6">
          <div className="text-3xl font-bold">
            Welcome to NatureMark Systems
          </div>
          <div>Already have an account?</div>
          <Link
            to="/"
            className="bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-900"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
