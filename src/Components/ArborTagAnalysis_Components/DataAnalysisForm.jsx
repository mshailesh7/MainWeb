import { Link, useSearchParams } from "react-router-dom";
import { IoCloudUpload } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import {
  MdIntegrationInstructions,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import { useState } from "react";

export default function DataAnalysisForm({ SetShowInstructions }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [UploadedFileSize, SetUploadedFileSize] = useState(0);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Perform any additional logic you want with the selected file
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileSize = selectedFile.size; // Get the size of the file
      let uploadedBytes = 0; // Initialize the uploaded bytes to 0

      // Simulate progress
      const interval = setInterval(() => {
        uploadedBytes += 1024 * 100; // Simulate uploading 100KB at a time
        const progress = Math.round((uploadedBytes / fileSize) * 100);
        setUploadProgress(progress);
        SetUploadedFileSize(uploadedBytes / 1024);
        if (uploadedBytes >= fileSize) {
          clearInterval(interval); // Stop simulation when upload is complete
        }
      }, 10); // Simulate every 500 milliseconds
    } else {
      console.log("No file selected.");
    }
  };
  return (
    <div className="flex justify-center h-screen my-24 max-mdm:flex-col">
      <form
        action=""
        className="w-6/12 justify-center flex flex-col gap-y-4 px-4 py-4 bg-slate-100 max-mdm:w-9/12 max-mdm:mx-auto max-sm:w-screen"
      >
        <h1 className="text-3xl text-center max-md:text-2xl max-sm:text-xl my-8 select-none">
          Data Analysis
        </h1>

        <label
          htmlFor="fileInput"
          className="border-2 hover:cursor-pointer h-20 p-1 px-4 bg-gray-200 opacity-90 flex justify-between"
        >
          {selectedFile ? selectedFile.name : "Select File"}{" "}
          <IoCloudUpload className="" />
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          accept=".csv"
        />

        <div className="flex flex-col">
          <div className="flex justify-start gap-x-3">
            <input type="checkbox" name="" id="" className="my-auto" />
            <label htmlFor="">Average Tree Height</label>
          </div>
          <div className="flex justify-start gap-x-3">
            <input type="checkbox" name="" id="" className="my-auto" />
            <label htmlFor="">Average Tree Width</label>
          </div>
          <div className="flex justify-start gap-x-3">
            <input type="checkbox" name="" id="" className="my-auto" />
            <label htmlFor="">Diversity Map</label>
          </div>
          <div className="flex justify-start gap-x-3">
            <input type="checkbox" name="" id="" className="my-auto" />
            <label htmlFor="">Distribution of Trees</label>
          </div>
          <div className="flex justify-start gap-x-3">
            <input type="checkbox" name="" id="" className="my-auto" />
            <label htmlFor="">Heat Map</label>
          </div>
          <div className="flex justify-start gap-x-3">
            <input type="checkbox" name="" id="" className="my-auto" />
            <label htmlFor="">Summary Table</label>
          </div>
        </div>
        <Link
          to="#_"
          onClick={handleUpload}
          className="relative text-center px-10 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-400 ease flex justify-center gap-x-2"
        >
          <FaFileUpload className="my-auto" /> UPLOAD
        </Link>
        <Link
          to="#_"
          onClick={() => SetShowInstructions(true)}
          className="relative flex gap-x-1 justify-center text-center px-10 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-400 ease"
        >
          <MdOutlineIntegrationInstructions className="my-auto" /> VIEW
          INSTRUCTIONS
        </Link>
        <div>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-1">
              <h1 className="font-bold">File Selected:</h1>
              <h1>{selectedFile ? selectedFile.name : "none"}</h1>
            </div>
            <div className="flex gap-x-1">
              <h1 className="font-bold">Analysis Selected:</h1>
              <h1>None</h1>
            </div>
          </div>
        </div>
      </form>
      {selectedFile ? (
        <div className="flex flex-col border-2 gap-y-2 w-5/12 max-mdm:w-9/12 max-mdm:mx-auto max-sm:w-screen py-8">
          <h1 className="text-center text-2xl max-md:text-xl max-sm:text-lg">
            Uploading Files
          </h1>
          <div className="p-4 flex flex-col gap-y-4">
            <div className="flex justify-between">
              <h1 className="font-semibold text-md">
                {selectedFile?.name.substring(0, 30)}
              </h1>
              <RxCross2
                onClick={() => {
                  setSelectedFile(null);
                  setUploadProgress(0);
                }}
              />
            </div>
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{
                    width: `${uploadProgress >= 100 ? 100 : uploadProgress}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="font-semibold">
              {uploadProgress >= 100 ? 100 : uploadProgress} % done
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
