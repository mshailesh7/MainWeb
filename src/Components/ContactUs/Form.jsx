import React from "react";
import InputField from "./Input Fields/InputField";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Form() {
  return (
    <form
      action=""
      className="flex flex-col md:w-4/12 sm:w-full bg-green-800 rounded"
    >
      <InputField />
      <InputField />
      <InputField />

      <button className="bg-green-100 w-56 text-black mx-auto my-auto h-10">
        Submit
      </button>
      <div className="flex gap-x-7 justify-center mb-6 mt-5">
        <FaFacebook className="scale-150 text-white" />
        <FaLinkedin className="scale-150 text-white" />
        <FaGithub className="scale-150 text-white" />
      </div>
    </form>
  );
}

export default Form;
