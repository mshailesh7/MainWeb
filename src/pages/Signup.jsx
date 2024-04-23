import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!agreedToTerms) {
      toast.error("You must agree to the terms and conditions to proceed.");
      return;
    }
    setOtpSent(true);
    toast.info("A 4-digit OTP has been sent to your email address.");
  };

  const verifyOtp = (event) => {
    event.preventDefault();
    if (otp.length === 4 && /^\d+$/.test(otp)) {
      console.log("User registered:", { name, email, password });
      navigate("/login");
      toast.success("You have successfully signed up! Please login.");
    } else {
      toast.error("Invalid OTP! Please enter a 4-digit number.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-neutral-100">
      <div className="bg-green-100 flex flex-col sm:flex-row-reverse border-2 sm:max-w-screen-xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex-grow p-8 flex flex-col justify-center">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Create Your Account
          </h2>
          {!otpSent ? (
            <form className="mt-2 space-y-6" onSubmit={handleSignUp}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white rounded-lg shadow-sm p-3 w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="bg-white rounded-lg shadow-sm p-3 w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Email"
                />
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
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
                      <FaEyeSlash
                        className="text-xl"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                </div>
                <div className="relative flex items-center">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="bg-white rounded-lg shadow-sm p-3 flex-grow border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                    placeholder="Confirm Password"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500">
                    {showConfirmPassword ? (
                      <IoEyeSharp
                        className="text-xl"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    ) : (
                      <FaEyeSlash
                        className="text-xl"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <label className="flex items-center text-sm text-gray-900">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={() => setAgreedToTerms(!agreedToTerms)}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="ml-2">
                    I agree to the terms and conditions
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
          ) : (
            <form className="mt-2 space-y-6" onSubmit={verifyOtp}>
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="bg-white rounded-lg shadow-sm p-3 w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                placeholder="Enter OTP"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Verify OTP and Sign Up
              </button>
            </form>
          )}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700">
              Already have an account?{" "}
              <Link to="/login" className="text-green-500 hover:text-green-500">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default SignUp;
