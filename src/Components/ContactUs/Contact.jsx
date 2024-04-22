import { BiSolidEnvelope } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

import Form from "./Form";
import Location from "./Location";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="h-screen">
      <h1 className="mt-56 text-center text-3xl font-bold mb-6">
        Connect With Us
      </h1>
      <Form />
      <div className="flex  max-mds:gap-y-4 max-sm:flex-col">
        <div className="w-1/2 flex flex-col gap-y-4 text-start px-16 max-md:px-0 max-mds:mx-auto">
          <div className="text-4xl ">Contact Us</div>
          <div>Better yet, see us in person!</div>
          <Link className="border-2 w-fit px-5 py-1 flex gap-x-1 bg-green-200 rounded-3xl">
            <FaWhatsapp className="m-auto" /> Message us on WhatsApp
          </Link>
          <div className="font-medium">NatureMark Systems</div>
          <div>Mangaluru, Karnataka, india</div>
          <div>+91 9833363372/+91 7204141484</div>
          <h1>Hours</h1>
          <p>Open today 09:00 am - 05:00 pm ^</p>
        </div>
        <div className="w-3/4 h-96 max-mds:w-2/4 max-mds:m-3 max-sm:mx-auto max-sm:w-full">
          <Location />
        </div>
      </div>
    </div>
  );
}

export default Contact;
