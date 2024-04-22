import React from "react";
import { BiSolidEnvelope } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

function NMSContactDetails() {
  return (
    <div className="flex flex-col gap-4">
      <header className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-x-2">
        <img
          src="src\Asset\uuid=2AA821F7-7540-433F-A79F-0EBCE66F4C63&library=1&type=1&mode=1&loc=true&cap=true.png"
          alt="NatureMark Systems"
          className="w-12"
        />
        NatureMark Systems
      </header>
      <div className="flex gap-x-2 items-center">
        <FaLocationDot />
        <span>Mangaluru, Karnataka, India</span>
      </div>
      <div className="flex gap-x-2 items-center">
        <IoCallSharp />
        <span className="underline">+91 9833363372, +91 7204141484</span>
      </div>
      <div className="flex gap-x-2 items-center">
        <BiSolidEnvelope />
        <span>naturemarksystems@gmail.com</span>
      </div>
    </div>
  );
}

export default NMSContactDetails;
