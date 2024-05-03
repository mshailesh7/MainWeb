import { Link } from "react-router-dom";
import { IoCloudUpload } from "react-icons/io5"; 
import { MdIntegrationInstructions, MdOutlineIntegrationInstructions } from "react-icons/md";

export default function Instructions({ SetShowForm }) {
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full max-w-4xl px-4 ">
      <h1 className="text-center text-3xl font-bold text-white mb-4">
        Instructions for Uploading Your Data Files
      </h1>
      <p className="text-lg text-white self-center mb-4">
        Before uploading your data file, please ensure it meets the following criteria for a smooth and efficient processing experience:
      </p>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <strong>Required Data Collection:</strong> Your data should be organized into the following columns in the specified order:
            <ul className="pl-4 mt-2">
              <li><strong>Location:</strong> The specific location where the data was collected.</li>
              <li><strong>Date:</strong> The date when data was collected.</li>
              <li><strong>Scientific Name:</strong> The specific name of the species observed.</li>
              <li><strong>Height:</strong> The height of the plant or tree measured (in meters).</li>
              <li><strong>Width:</strong> The width of the plant or tree at its widest point (in meters).</li>
              <li><strong>Diameter:</strong> The diameter of the stem or trunk (in centimeters).</li>
              <li><strong>Carbon Seq.:</strong> The amount of carbon sequestration (use appropriate units).</li>
              <li><strong>Latitude:</strong> The latitude of the location where the data was collected.</li>
              <li><strong>Longitude:</strong> The longitude of the location where the data was collected.</li>
            </ul>
          </li>
          <li>
            <strong>File Format:</strong> The data must be exported or uploaded as a .csv (Comma Separated Values) file. Ensure your file has the file extension .csv to be accepted by our system.
          </li>
          <li>
            <strong>File Template:</strong> To help you format your data correctly, we have provided a downloadable template. Please use this template to ensure your data meets our requirements.
          </li>
        </ul>
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/UploadAnalysis"
          onClick={() => SetShowForm(true)}
          className="inline-flex items-center justify-center px-6 py-3 gap-2 text-lg text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
        >
          <IoCloudUpload className="text-2xl" />
          Close Instructions and Upload Data
        </Link>
      </div>
    </div>
  );
}
