import ContactInfo from "../Components/ContactUs/ContactInfo";
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
      <Form />
    </div>
  );
}
