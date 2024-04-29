import React from "react";
import { Link } from "react-router-dom";

function UploadAnalysisForm() {
  return (
    <div className="w-96 mx-auto flex flex-col gap-y-4 h-screen justify-center">
      <h1 className="text-3xl text-center max-md:text-2xl max-sm:text-xl my-8 select-none">
        Upload Your CSV File Here
      </h1>
      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload CSV file
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Upload
      </button>
      <Link
        type="submit"
        to="/ArBorTagAnalysis"
        className="w-full text-center bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Back to Previous Page
      </Link>
    </div>
  );
}

export default UploadAnalysisForm;
