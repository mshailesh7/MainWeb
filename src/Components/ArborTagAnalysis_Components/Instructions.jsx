import { Link, useSearchParams } from "react-router-dom";
import { IoCloudUpload } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import DataAnalysisForm from "./DataAnalysisForm";
import {
  MdIntegrationInstructions,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
export default function Instructions({ SetShowInstructions }) {
  return (
    <>
      <div className="flex flex-col my-36 w-5/12 max-md:w-11/12 max-mdm:w-10/12 max-sm:w-9/12 max-2xl:w-7/12 mx-auto h-screen gap-y-2">
        <div className="font-bold text-2xl">
          Instructions for Uploading Your Data Files
        </div>
        <div className="">
          Before Uploading Your data File. Please ensure that it meets the
          following criteria to ensure a smooth and efficient processing
          experience:
        </div>
        <div className="flex gap-x-2 justify-start ">
          •
          <h1 className=" font-bold">
            Required Data Collection:{" "}
            <span className=" font-normal">
              Your data should be organized into the following columns in the
              specified order
            </span>
          </h1>
        </div>
        <div className="px-4 py-4">
          {" "}
          <ul className=" font-bold">
            Location:{" "}
            <span className=" font-normal">
              The specific location where the data was collected
            </span>
          </ul>
          <h1 className=" font-bold">
            Date:{" "}
            <span className=" font-normal">
              The date when data was collected.
            </span>
          </h1>
          <h1 className=" font-bold">
            Scietific Name:{" "}
            <span className=" font-normal">
              The specific name of the species was observed.
            </span>
          </h1>
          <h1 className=" font-bold">
            Height:{" "}
            <span className=" font-normal">
              The height of the plant or tree measured (in meters).
            </span>
          </h1>
          <h1 className=" font-bold">
            Width:{" "}
            <span className=" font-normal">
              The width of the plant or tree at its widest point (in meters).
            </span>
          </h1>
          <h1 className=" font-bold">
            Diameter:{" "}
            <span className=" font-normal">
              The diameter of the stem or trunk (in centimeters){" "}
            </span>
          </h1>
          <h1 className=" font-bold">
            Carbon Seq.:{" "}
            <span className=" font-normal">
              The amount of carbon sequestation (in kilometers or appropriate
              unit)
            </span>
          </h1>
          <h1 className=" font-bold">
            Latitude:{" "}
            <span className=" font-normal">
              The latitude of the loction where the data was collected.
            </span>
          </h1>
          <h1 className=" font-bold">
            Longitude:{" "}
            <span className=" font-normal">
              The longitude of the location where the data was collected.
            </span>
          </h1>
        </div>
        <div className="flex gap-x-1">
          •
          <h1 className=" font-bold">
            File Format:{" "}
            <span className=" font-normal">
              The data must be exported or uploaded as a.csv (Comma Seperated
              Values) file. Ensure your file has file extention .csv to be
              accepted by our system.
            </span>
          </h1>
        </div>
        <div className="flex gap-x-2">
          •
          <h1 className=" font-bold">
            File Template:{" "}
            <span className=" font-normal">
              To help you format your data correctly, we have provided a
              downloadable template. Please use this template to ensure that
              your data meets your requirements.
            </span>
          </h1>
        </div>
        <Link
          to="#_"
          onClick={() => SetShowInstructions(false)}
          class="w-fit flex justify-center my-2 px-8 py-2 gap-x-2 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 mx-auto"
          data-primary="green-400"
          data-rounded="rounded-2xl"
          data-primary-reset="{}"
        >
          <MdIntegrationInstructions className="my-auto" /> Close Instructions
        </Link>
      </div>
    </>
  );
}
