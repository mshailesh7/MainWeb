import { BiSolidEnvelope } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import SocialLinks from "./SocialLinks";
export default function ContactInfo() {
  return (
    <div className="p-11 md:w-1/2 bg-green-100 rounded-lg shadow-lg flex flex-col items-center justify-center text-center max-md:w-full">
      <header className="text-3xl md:text-4xl font-semibold mb-8">
        <img
          src="src/Asset/green-logo.png"
          alt="NatureMark Systems"
          className="w-12 mx-auto"
        />
        <span className="text-xl md:text-3xl font-bold text-black transition duration-300 ease-in-out">
          NatureMark Systems
        </span>
      </header>
      <div className="flex gap-x-2 items-center mb-4 justify-center">
        <FaLocationDot className="text-xl" />
        <span>Mangaluru, Karnataka, India</span>
      </div>
      <div className="flex gap-x-2 items-center mb-4 justify-center">
        <IoCallSharp className="text-xl" />
        <span className="underline">+91 9833363372, +91 7204141484</span>
      </div>
      <div className="flex  gap-x-2 items-center mb-4 justify-center">
        <BiSolidEnvelope className="text-xl" />
        <span>naturemarksystems@gmail.com</span>
      </div>
      <SocialLinks />
      <a
        href="https://wa.me/919833363372"
        className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-2 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="inline mr-2 text-xl" /> Message us on WhatsApp
      </a>
    </div>
  );
}
