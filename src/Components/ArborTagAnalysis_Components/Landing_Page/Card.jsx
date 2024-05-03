import React, { useState } from "react";

function Card({ title, image, text }) {
  const [showParagraph, setShowParagraph] = useState(false);
  const fullText = text.join(" ");
  const compressedText = fullText.substring(0, 300) + "...";

  return (
    <div
      className="relative overflow-hidden shadow-lg rounded-lg cursor-pointer
                 transition duration-500 ease-in-out transform hover:scale-105
                 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      onMouseEnter={() => setShowParagraph(true)}
      onMouseLeave={() => setShowParagraph(false)}
    >
      <img className="rounded-t-lg w-full h-80 object-cover" src={image} alt={title} />
      <div className="p-4 bg-white rounded-b-lg">
        <h5 className="text-lg font-bold flex justify-center text-gray-900">{title}</h5>
        <p className="text-sm text-gray-700 mt-2">
          {showParagraph ? fullText : compressedText}
        </p>
      </div>
    </div>
  );
}

export default Card;
