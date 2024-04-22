import { BiSolidEnvelope } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import Form from "./Form";
function Contact() {
  return (
    <>
      <h1 className="mt-56 text-center md:text-3xl sm:2xl mb-5 font-bold">
        Connect With Us
      </h1>
      <div className="bg-green-100 w-10/12 mx-auto py-20">
        <div className="flex  justify-center m-auto flex-wrap-reverse gap-x-8">
          <div className="flex flex-col my-auto ">
            <section className="flex flex-col gap-y-4 font-medium justify-center">
              <header className="md:text-3xl sm:text-2xl mb-12 flex gap-x-2">
                <img src="src\Asset\Logo.png" alt="" className="w-12" />
                NatureMark Systems
              </header>
              <div className="flex gap-x-2 my-auto justify-end">
                <div>Mangaluru, Karnataka, India</div>
                <div>
                  <FaLocationDot />
                </div>
              </div>
              <div className="flex gap-x-2 my-auto justify-end">
                <div className="underline">
                  +91 9833363372 <br /> +91 7204141484
                </div>
                <div className="my-auto">
                  <IoCallSharp />
                </div>
              </div>
              <div className="flex gap-x-2 my-auto justify-end">
                <div>naturemarksystems@gmail.com</div>
                <div>
                  <BiSolidEnvelope />
                </div>
              </div>
            </section>
          </div>

          <div className="w-96 h-96 border-2 flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30145.586891423478!2d74.82904487003849!3d12.919820137892374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C Karnataka!5e0!3m2!1sen!2sin!4v1713510525807!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              className="mx-auto my-auto h-full w-full shadow-[25px_35px_0px_0px_rgba(0,0,0,0.1)]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;
