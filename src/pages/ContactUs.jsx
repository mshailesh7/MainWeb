import React, { useState } from 'react';
import { BiSolidEnvelope } from 'react-icons/bi';
import { FaWhatsapp, FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaLocationDot, FaSquareInstagram } from 'react-icons/fa6';
import { IoCallSharp } from 'react-icons/io5';

function ContactUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20">
      <h1 className="text-4xl font-bold text-green-800 my-8">Connect With Us</h1>
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-start gap-4">
      <div className="flex flex-col md:flex-row w-full justify-center items-stretch gap-4">
        <ContactInfo />
        <Location />
        </div>
      </div>
      <div className="container mx-auto px-4 flex-wrap justify-between items-start grid grid-cols-1 md:grid-cols-12 gap-4 w-full mt-8">
        <FAQ />
        <Form />
      </div>
    </div>
  );
}


function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mt-5">
      <a href="https://www.linkedin.com/company/nature-mark-sys/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-800" />
      </a>
      <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-3xl text-blue-600 hover:text-blue-700" />
      </a>
      <a href="https://www.instagram.com/Naturemarksystems" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-3xl text-pink-600 hover:text-pink-700" />
      </a>
    </div>
  );
}



function Questions_Answers({ Question, Answer }) {
  const [show, setShow] = useState(false);
  return (
    <div className="my-2">
      <hr className="border-2" />
      <div className="p-3">
        <div className="flex justify-between items-center font-semibold cursor-pointer" onClick={() => setShow(!show)}>
          <span className="text-xl">{Question}</span>
          <span className="text-2xl">{show ? '-' : '+'}</span>
        </div>
        {show && <p className="text-gray-700 mt-2">{Answer}</p>}
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0 md:col-span-4 xl:col-span-5">
      <h1 className="text-center font-bold text-2xl mb-4">Frequently Asked Questions</h1>
      <Questions_Answers
        Question="What is Carbon offsetting??"
        Answer="Carbon offsetting is a method to counteract carbon emissions by investing in
        projects that reduce or remove an equivalent amount of emissions elsewhere.
        Projects include renewable energy initiatives, reforestation, and methane
        capture."
      />
      <Questions_Answers
        Question="Who are we?"
        Answer="NatureMark Systems is revolutionizing the carbon market landscape with our
        cutting-edge digital Measurement, Report, and Validation (MRV) platform. We
        empower our partners to navigate this dynamic terrain with ease, enabling
        them to quantify, validate, and trade their carbon credits effectively."
      />
      <Questions_Answers
        Question="What is a Carbon Credit Market?"
        Answer="A carbon credit market is a platform where carbon credits, representing the
        right to emit a specific amount of carbon dioxide or other greenhouse gases,
        are bought, and sold. It enables businesses and organizations to trade
        emissions allowances, encouraging emission reductions in a cost-effective
        manner. This market incentivizes investment in low-carbon technologies and
        practices, facilitating the global transition to a more sustainable economy."
      />
      <Questions_Answers
        Question="Why should you de-Carbonize?"
        Answer="Decarbonization is crucial for mitigating climate change and its adverse effects.
        By reducing carbon emissions, we can limit global warming, preserve
        ecosystems, and safeguard human health."
      />
      <Questions_Answers
        Question="How does being Carbon Net Zero benefit me?"
        Answer="Achieving carbon neutrality offers cost savings through enhanced operational
        efficiency and reduced energy expenses. It ensures compliance with
        regulations, expands market access, and fosters innovation and differentiation,
        positioning companies as leaders in sustainability while mitigating risks and
        enhancing stakeholder engagement."
      />
    </div>
  );
}

function InputField({ label, type, inputClass }) {
  const isTextArea = type === 'textarea';
  const InputOrTextArea = isTextArea ? 'textarea' : 'input';

  return (
    <div className="relative z-0 w-full mb-6 group">
      <InputOrTextArea
        name={`floating_${label}`}
        id={`floating_${label}`}
        className={`block w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer ${inputClass || ''}`}
        placeholder=" "
        required
      />
      <label
        htmlFor={`floating_${label}`}
        className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-green-100 shadow-lg rounded-lg p-6 md:col-span-8 xl:col-span-7">
    <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Write to Us</h2>    
      <form>
        <InputField label="Name" type="text" />
        <InputField label="Email address" type="email" />
        <InputField label="Message" type="textarea" inputClass="h-24" />
        <button type="submit" className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-2 transition-all duration-300 ease-in-out">
          Send
        </button>
      </form>
    </div>
  );
}

function ContactInfo() {
  const emailAddress = "naturemarksystems@gmail.com";
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(emailAddress)}`;

  return (
    <div className="flex-grow bg-green-100 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center max-w-md">
      <img src="src/Asset/green-logo.png" alt="NatureMark Systems" className="w-12 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-black">NatureMark Systems</h3>
      <div className="flex items-center justify-center gap-2 mt-4">
        <FaLocationDot className="text-xl" />
        <span>Mangaluru, Karnataka, India</span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <IoCallSharp className="text-xl" />
        <span className="underline">+91 9833363372 / +91 7204141484</span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <BiSolidEnvelope className="text-xl" />
        <a href={mailtoLink} className="underline text-black" target="_blank" rel="noopener noreferrer">
          naturemarksystems@gmail.com
        </a>
      </div>
      <SocialLinks />
      <a href="https://wa.me/919833363372" className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-2 transition-all duration-300" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="inline mr-2 text-xl" /> Message us on WhatsApp
      </a>
    </div>
  );
}



function Location() {
  return (
    <div className="flex-grow">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30145.586891423478!2d74.82904487003849!3d12.919820137892374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1713510525807!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      className="rounded-lg shadow-lg w-full h-full"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  );
}

export default ContactUs;
