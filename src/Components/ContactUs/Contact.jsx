import React from "react";
import { FaWhatsapp, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { BiSolidEnvelope } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";


function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <h1 className="pt-10 md:pt-20 text-center text-4xl font-bold text-green-800 m-6">
        <span className="border-b-2 border-gray-400 pb-2">
          Connect With Us
        </span>
      </h1>
      <div className="w-full flex flex-wrap justify-center items-start px-10 py-5">
        <ContactInfo />
        <Location />
      </div>
      <h2 className="text-center text-4xl font-bold text-green-800 m-6">
        <span className="border-b-2 border-gray-400 pb-2">
          Write to Us
        </span>
      </h2>
      <Form />
    </div>
  );
}


function ContactInfo() {
  return (
    <div className="w-full md:w-1/2 p-5 bg-green-100 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
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
        <FaLocationDot className="text-xl"/>
        <span>Mangaluru, Karnataka, India</span>
      </div>
      <div className="flex gap-x-2 items-center mb-4 justify-center">
        <IoCallSharp className="text-xl" />
        <span className="underline">+91 9833363372, +91 7204141484</span>
      </div>
      <div className="flex gap-x-2 items-center mb-4 justify-center">
        <BiSolidEnvelope className="text-xl" />
        <span>naturemarksystems@gmail.com</span>
      </div>
      <a href="https://wa.me/919833363372" className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-2 transition duration-300" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="inline mr-2 text-xl" /> Message us on WhatsApp
      </a>
    </div>
  );
}

    
    function Location() {
      return (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30145.586891423478!2d74.82904487003849!3d12.919820137892374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1713510525807!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          className="w-full md:w-1/2 h-96 rounded-lg shadow-lg"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      );
    }
    
    
    
    function Form() {
      return (
        <form className="w-full max-w-4xl p-5 bg-green-100 rounded-lg shadow-lg text-gray-900 my-6 border-2 border-green-800">
      <InputField label="Name" type="text" />
      <InputField label="Email address" type="email" />
      <InputField label="Message" type="text" inputClass="h-24" />
      <button
        type="submit"
        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-2 transition duration-300 w-full"
      >
        Send
      </button>
      <SocialLinks />
    </form>
  );
}

function InputField({ label, type, inputClass }) {
  const isTextArea = type === "textarea";
  const InputOrTextArea = isTextArea ? "textarea" : "input";

  return (
    <div className="relative z-0 bg-white w-full mb-6 group">
      <InputOrTextArea
        as={InputOrTextArea}
        name={`floating_${label}`}
        id={`floating_${label}`}
        className={`block ${isTextArea ? '' : 'py-2.5'} pl-2 pr-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer ${inputClass}`}
        placeholder=" "
        required
      />
      <label
        htmlFor={`floating_${label}`}
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform translate-y-0 scale-100 top-3 left-2 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-green-600 peer-focus:-translate-y-7 peer-placeholder-shown:translate-y-0 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mt-5">
      <FaLinkedin className="text-3xl text-blue-700 cursor-pointer hover:text-blue-800" />
      <FaFacebook className="text-3xl text-blue-600 cursor-pointer hover:text-blue-700" />
      <FaGithub className="text-3xl text-gray-700 cursor-pointer hover:text-black" />
    </div>
  );
}


export default Contact;
