import React from "react";

const TextImageComponent = ({ text, image, imageFirst }) => {
  return (
    <div className="section-container flex flex-col md:flex-row gap-x- overflow-hidden shadow-lg rounded-lg">
      <div
        className={`image md:w-1/2 ${imageFirst ? "md:order-1" : "md:order-2"} bg-cover bg-center rounded-lg transition-all duration-300 ease-in-out hover:scale-105`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Empty div used for background image */}
      </div>
      <div
        className={`content md:w-1/2 flex flex-col justify-center p-20 ${imageFirst ? "md:order-2" : "md:order-1"} bg-white rounded-lg`}
      >
        <div className="content-container flex flex-col gap-y-2">
          <h5 className="text-2xl font-semibold text-center mb-2">
            {text.title}
          </h5>
          {text.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base text-center leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextImageComponent;
