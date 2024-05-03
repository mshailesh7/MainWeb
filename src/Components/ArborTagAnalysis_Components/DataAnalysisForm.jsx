import React, { useState } from "react";
import Instruction from "./Instructions";
import Instructions from "./Instructions";
function DataAnalysisForm() {
  const [Option1, SetOption1] = useState(true);
  const [Option2, SetOption2] = useState(true);
  const [Option3, SetOption3] = useState(true);
  const [Option4, SetOption4] = useState(true);
  const [Option5, SetOption5] = useState(true);
  const [Option6, SetOption6] = useState(true);
  const [ShowForm, SetShowForm] = useState(true);
  return (
    <div>
      {ShowForm ? (
        <div className="flex flex-col justify-center my-36 gap-y-8 border-2 w-6/12 mx-auto bg-gray-600 pt-16 max-md:w-9/12 max-lg:w-8/12 max-sm:w-full bg-opacity-75 pb-12">
          <h1 className="text-center text-white font-bold text-3xl underline underline-offset-8">
            Data Analysis
          </h1>
          <div className="w-full flex flex-col justify-center px-12 gap-y-4">
            <label
              htmlFor="fileInput"
              className="bg-green-500 text-white w-full text-center py-2 font-bold text-lg rounded-md cursor-pointer"
            >
              Select your file
            </label>
            <input
              accept=".csv"
              type="file"
              id="fileInput"
              className="hidden rounded-md "
            />
          </div>

          <div className="px-12 flex flex-col gap-y-6">
            <h1 className="text-white font-bold text-xl">
              Select your analysis
            </h1>

            <div className="flex flex-wrap justify-start mx-auto gap-x-3 gap-y-3">
              <div
                onClick={() => SetOption1(!Option1)}
                className={`${
                  Option1
                    ? " px-3 py-1 rounded-md font-bold bg-white"
                    : " px-3 py-1 rounded-md font-bold bg-green-400"
                } select-none my-auto`}
              >
                <span className=" font-bold text-lg my-auto">
                  {!Option1 ? "x" : "+"}
                </span>{" "}
                Average Time Height
              </div>
              <div
                onClick={() => SetOption2(!Option2)}
                className={`${
                  Option2
                    ? " px-3 py-1 rounded-md font-bold bg-white"
                    : " px-3 py-1 rounded-md font-bold bg-green-400"
                } select-none my-auto`}
              >
                <span className=" font-bold text-lg my-auto">
                  {!Option2 ? "x" : "+"}
                </span>{" "}
                Average Time Width
              </div>
              <div
                onClick={() => SetOption3(!Option3)}
                className={`${
                  Option3
                    ? " px-3 py-1 rounded-md font-bold bg-white"
                    : " px-3 py-1 rounded-md font-bold bg-green-400"
                } select-none my-auto`}
              >
                <span className=" font-bold text-lg my-auto">
                  {!Option3 ? "x" : "+"}
                </span>{" "}
                Diversity Map
              </div>
              <div
                onClick={() => SetOption4(!Option4)}
                className={`${
                  Option4
                    ? " px-3 py-1 rounded-md font-bold bg-white"
                    : " px-3 py-1 rounded-md font-bold bg-green-400"
                } select-none my-auto`}
              >
                <span className=" font-bold text-lg my-auto">
                  {!Option4 ? "x" : "+"}
                </span>{" "}
                Distribution of Trees
              </div>
              <div
                onClick={() => SetOption5(!Option5)}
                className={`${
                  Option5
                    ? " px-3 py-1 rounded-md font-bold bg-white"
                    : " px-3 py-1 rounded-md font-bold bg-green-400"
                } select-none my-auto`}
              >
                <span className=" font-bold text-lg my-auto">
                  {!Option5 ? "x" : "+"}
                </span>{" "}
                Summary Table
              </div>
              <div
                onClick={() => SetOption6(!Option6)}
                className={`${
                  Option6
                    ? " px-3 py-1 rounded-md font-bold bg-white"
                    : " px-3 py-1 rounded-md font-bold bg-green-400"
                } select-none my-auto`}
              >
                <span className=" font-bold text-lg my-auto">
                  {!Option6 ? "x" : "+"}
                </span>{" "}
                Heat Map
              </div>
            </div>
          </div>

          <div className="my-4 flex flex-col gap-y-4 px-12 ">
            {" "}
            <button
              type="button"
              className="py-3 w-full inline-flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent bg-green-400 text-black hover:bg-green-700 "
            >
              Upload
            </button>
            <button
              onClick={() => SetShowForm(!ShowForm)}
              type="button"
              className="py-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-400 text-black hover:bg-green-700"
            >
              Instructions
            </button>
          </div>
        </div>
      ) : (
        <Instructions SetShowForm={SetShowForm} />
      )}
    </div>
  );
}

export default DataAnalysisForm;
