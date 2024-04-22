import React, { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import SignIn from "./Login";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const[passwordReset, setPasswordReset] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    alert('A 4-digit OTP has been sent to your email address.');
    setOtpSent(true);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setOtpVerified(true);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert('Your password was successfully reset. Please sign in.');
    console.log('Password has been reset successfully');
    setPasswordReset(true);
  };
  if(passwordReset){
    return<SignIn/>;
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-md p-6 bg-green-100 shadow-xl rounded-lg">
        <div className="min-h-full flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
              {otpVerified ? "Reset Your Password" : "Forgot Password"}
            </h2>
            {!otpSent ? (
              <form className="mt-8 space-y-6" onSubmit={handleSendOtp}>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your e-mail address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Send OTP
                </button>
              </form>
            ) : otpVerified ? (
              <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="New Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      {showPassword ? (
                        <IoEyeOffSharp onClick={() => setShowPassword(false)} className="cursor-pointer" />
                      ) : (
                        <IoEyeSharp onClick={() => setShowPassword(true)} className="cursor-pointer" />
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      {showConfirmPassword ? (
                        <IoEyeOffSharp onClick={() => setShowConfirmPassword(false)} className="cursor-pointer" />
                      ) : (
                        <IoEyeSharp onClick={() => setShowConfirmPassword(true)} className="cursor-pointer" />
                      )}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Confirm Reset
                </button>
              </form>
            ) : (
              <form className="mt-8 space-y-6" onSubmit={handleVerifyOtp}>
                <input
                  type="text"
                  autoComplete="one-time-code"
                  required
                  maxLength="4"
                  pattern="\d{4}"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your 4-digit OTP"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                />
                <button
                  type="submit"
                  className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Verify OTP
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
