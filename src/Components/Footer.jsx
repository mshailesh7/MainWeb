import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import whitelogo from "../Asset/white-logo.png";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h2 className="mb-6 text-xl font-bold">Categories</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors duration-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors duration-300">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors duration-300">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Our Services</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300 transition-colors duration-300">
                  ArborTag App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors duration-300">
                  ArborTag Device
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors duration-300">
                  Analyze your data
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors duration-300">
                  Sell your Carbon Credits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6">
              <img src={whitelogo} alt="NatureMark Systems Logo" className="h-8 mx-auto sm:mx-0"/>
              <h2 className="text-xl font-bold mt-2">NatureMark Systems</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <IoMdMail className="text-lg"/>
                <a href="#" className="hover:underline hover:text-green-300 transition-colors duration-300">
                  naturemarksystems@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <IoLocationSharp className="text-lg"/>
                <a href="#" className="hover:underline hover:text-green-300 transition-colors duration-300">
                  Mangaluru, Karnataka, India
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaPhoneAlt className="text-lg"/>
                <a href="#" className="underline hover:text-green-300 transition-colors duration-300">
                  +91 9833363372
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
