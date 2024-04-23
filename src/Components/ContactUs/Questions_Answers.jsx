import React, { useState } from "react";

function Questions_Answers({ Question, Answer }) {
  const [Show, SetShow] = useState(false);
  return (
    <div className="mt-3">
      <hr className="border-2" />
      <div className="p-4">
        <div>
          <div className="flex justify-between mx-3 font-bold">
            <div className="text-xl">{Question}</div>
            <div
              className="text-2xl hover:cursor-pointer"
              onClick={() => SetShow(!Show)}
            >
              {Show ? "-" : "+"}
            </div>
          </div>
        </div>
        {Show ? (
          <div className="mx-3">
            <p className="text-">{Answer}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Questions_Answers;
