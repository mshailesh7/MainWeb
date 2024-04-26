import React from "react";

const Buyers_and_Sellers_Component = ({ Rules }) => {
  return (
    <div className="relative mb-2 p-4 transition duration-500 ease-in-out hover:bg-purple-50 rounded-md">
      <svg
        className="w-8 h-8 text-green-600 absolute left-2 top-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <div className="pl-12 text-gray-800">
        {Rules}
      </div>
    </div>
  );
};

export default Buyers_and_Sellers_Component;
