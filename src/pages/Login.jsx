import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5"; // Icons for visibility toggle

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-white">
      <div className="bg-green-100 flex flex-col sm:flex-row border-2 sm:max-w-screen-xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex-grow p-8 flex flex-col justify-center">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Sign In to Your Account
          </h2>
          <form className="mt-2 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white rounded-lg shadow-sm p-3 w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                placeholder="Email"
              />
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white rounded-lg shadow-sm p-3 flex-grow border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Password"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500">
                  {showPassword ? (
                    <IoEyeSharp
                      className="text-xl"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <IoEyeOffSharp
                      className="text-xl"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-900">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-500">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Sign In
            </button>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-700">
                Don't have an account?{' '}
                <Link to="/signup" className="text-green-500 hover:text-green-500">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
