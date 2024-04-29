import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TextImageComponent = ({ text, image, imageFirst, index }) => {
  const [ShowForm, SetShowForm] = useState(false);
  return (
    <div
      className={`"section-container border-green-500 flex  flex-col md:flex-row  shadow-lg rounded-lg h-fit
      " ${index % 2 == 0 ? "border-r-4 " : "border-l-4 "}}`}
    >
      <img
        src={image}
        className={`image md:w-1/2 ${
          imageFirst ? "md:order-1" : "md:order-2"
        }  rounded-lg transition-all duration-300 ease-in-out hover:scale-105`}
        alt=""
      />
      <div
        className={`content md:w-1/2 flex flex-col justify-center p-10 ${
          imageFirst ? "md:order-2" : "md:order-1"
        } bg-white rounded-lg`}
      >
        <div className="content-container flex flex-col gap-y-4">
          <h5 className="text-2xl font-semibold text-center mb-2">
            {text.title}
          </h5>
          {text.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base text-center font-medium text leading-7"
            >
              {paragraph}
            </p>
          ))}
          <button
            onClick={() => SetShowForm(!ShowForm)}
            className={
              "box-border relative  px-8 py-3 font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer ease w-fit mx-auto flex gap-x-2"
            }
          >
            <FaMagnifyingGlass className="w-4 h-4 my-auto" />
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative flex items-center text-sm">
              <Link to="/UploadAnalysis">Upload Analysis</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextImageComponent;
