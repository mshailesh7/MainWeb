import { Link } from "react-router-dom";
import TextImageComponent from "../Components/ArborTagAnalysis_Components/AirborTagAnalysis_TextImageComponent";
import data from "./ArBorTagAnalysis.json";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";

const AiborTagAnalysis = () => {
  const [ShowForm, SetShowForm] = useState(false);

  return (
    <div
      className={`m-20 mx-auto w-10/12 flex flex-col space-y-8 ${
        ShowForm ? "justify-center h-screen" : null
      }`}
    >
      <h1 className="text-4xl md:text-4xl text-center font-bold my-8 flex flex-col gap-y-8">
        <span className="underline underline-offset-4" draggable>
          {ShowForm
            ? "Please Upload Your CSV File"
            : "GREEN CREDIT WEB ANALYSIS"}
        </span>
      </h1>
      <div className="flex flex-col gap-y-10">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className={`transition duration-500 ease-in-out transform ${
              index % 2 ? "hover:-translate-x-2" : "hover:translate-x-2"
            }`}
          >
            <TextImageComponent
              text={section.text}
              image={section.image}
              imageFirst={index % 2 === 0}
              index={index}
            />
          </div>
        ))}
      </div>
      )
    </div>
  );
};

export default AiborTagAnalysis;
