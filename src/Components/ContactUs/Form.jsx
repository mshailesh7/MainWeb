import InputField from "./InputFields";

export default function Form() {
  return (
    <form className=" p-5 bg-green-100 rounded-lg shadow-lg text-gray-900 my-6 border-2 border-green-800">
      <InputField label="Name" type="text" />
      <InputField label="Email address" type="email" />
      <InputField label="Message" type="text" inputClass="h-24" />
      <button
        type="submit"
        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-2 transition duration-300 w-full"
      >
        Send
      </button>
    </form>
  );
}
