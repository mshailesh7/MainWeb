import ContactInfo from "../Components/ContactUs/ContactInfo";
import FAQ from "../Components/ContactUs/FAQ";
import Form from "../Components/ContactUs/Form";
import Location from "../Components/ContactUs/Location";
export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center mt-16">
      <h1 className="pt-10 md:pt-20 text-center text-4xl font-bold text-green-800 m-6">
        <span className="border-b-2 border-gray-400 pb-2">Connect With Us</span>
      </h1>

      <div className="w-screen flex flex-wrap justify-center items-start">
        <ContactInfo />
        <Location />
      </div>
      <h2 className="text-center text-4xl font-bold text-green-800 m-6">
        <span className="border-b-2 border-gray-400 pb-2">Write to Us</span>
      </h2>
      <div className="flex  w-screen justify-center gap-x-2 max-md:flex-col">
        <div className=" w-4/12 max-md:w-7/12 max-md:mx-auto max-sm:w-11/12">
          <Form />
        </div>
        <div className=" w-96">
          <FAQ />
        </div>
      </div>
    </div>
  );
}
