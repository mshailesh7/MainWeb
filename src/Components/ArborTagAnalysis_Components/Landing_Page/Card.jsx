import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Card({ title, image, text }) {
  const [Showpara, SetShowPara] = useState(false);
  const [FullText, SetFullText] = useState(false);
  let Compressed_Text = text[0].substring(0, 200);
  return (
    <div
      className=" hover:scale-95 transition-all duration-500 hover:-backdrop-hue-rotate-180 w-3/12 hover:skew-12 flex flex-col gap-y-4 max-md:w-7/12 max-mds:9/12 max-sm:w-11/12"
      onMouseEnter={() => SetShowPara(true)}
      onMouseLeave={() => SetShowPara(false)}
    >
      {!Showpara ? (
        <>
          <img className="rounded-md h-64 w-full" src={image} alt="" />
          <div className="flex justify-between px-1">
            <div className="font-bold text-xl my-auto text-center mx-auto">
              {title}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="px-1 py-3">{text}</div>
          <div className="flex justify-between px-1">
            <div className="font-bold text-xl my-auto mx-auto">{title}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
