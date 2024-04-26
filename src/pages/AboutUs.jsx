import React from "react";
import TextImageComponent from "../Components/AboutUs/TextImageComponent";
import data from "./data.json";

const AboutUs = () => {
  return (
    <div className="m-16 mx-auto mt-36 w-9/12 flex flex-col space-y-8">
      <h1 className="text-4xl md:text-4xl text-center font-semibold my-8">
        <span className="" draggable>
          ABOUT NATUREMARK SYSTEMS!
        </span>
      </h1>
      <div className="flex flex-col gap-y-6">
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
    </div>
  );
};

export default AboutUs;
