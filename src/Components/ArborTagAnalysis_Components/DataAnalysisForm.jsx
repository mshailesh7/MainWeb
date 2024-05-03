import React, { useState, useCallback } from "react";
import Instructions from "./Instructions";
import { FaChartArea, FaDatabase, FaTree, FaMapMarkedAlt, FaTable, FaThermometerHalf, FaUpload } from "react-icons/fa";

function DataAnalysisForm() {
  const [options, setOptions] = useState([false, false, false, false, false, false]);
  const [file, setFile] = useState(null);

  const toggleOption = index => {
      setOptions(options.map((opt, i) => (i === index ? !opt : opt)));
  };

  const onDrop = useCallback((event) => {
      event.preventDefault();
      if (event.dataTransfer.files && event.dataTransfer.files[0]) {
          setFile(event.dataTransfer.files[0]);
      }
  }, []);

  const onChangeFile = event => {
      if (event.target.files && event.target.files[0]) {
          setFile(event.target.files[0]);
      }
  };
  const [showForm, setShowForm] = useState(true);

  const onDragOver = event => {
      event.preventDefault();
  };

    const handleUpload = () => {
        console.log("Uploaded file:", file ? file.name : "No file selected.");
        console.log("Selected analysis options:", options.map((opt, idx) => opt ? optionData[idx].label : null).filter(Boolean));
    };

    const handleDiscard = () => {
        setOptions([false, false, false, false, false, false]);
        setFile(null);
    };

    const optionData = [
        { label: "Average Height", icon: <FaChartArea /> },
        { label: "Average Width", icon: <FaDatabase /> },
        { label: "Diversity Map", icon: <FaMapMarkedAlt /> },
        { label: "Distribution of Trees", icon: <FaTree /> },
        { label: "Key Statistics", icon: <FaTable /> },
        { label: "Heat Map", icon: <FaThermometerHalf /> }
    ];

    return (
        <>
            <h1 className="text-center text-black font-bold text-4xl mt-32">
                Data Analysis
            </h1>
            <div className="flex flex-col justify-center my-12 mb-32 gap-y-14 border-2 w-11/12 md:w-3/4 lg:w-2/3 mx-auto bg-gray-800 bg-opacity-90 p-10 rounded-lg">
                {showForm ? (
                    <>
                        <div className="flex justify-evenly">
                            <button
                                onClick={() => setShowForm(false)}
                                className="py-2 px-6 font-bold text-2xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
                                type="button"
                            >
                                Read Instructions
                            </button>
                        </div>
                        <div
                            className="flex flex-col justify-center items-center gap-y-4 p-4 border-2 border-dashed border-green-500 rounded-lg cursor-pointer"
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                        >
                            <input
                                type="file"
                                id="fileInput"
                                accept=".csv"
                                className="hidden"
                                onChange={onChangeFile}
                            />
                            <label htmlFor="fileInput" className="flex flex-col items-center justify-center gap-4">
                                <FaUpload className="text-3xl text-green-500" />
                                <span className="text-white text-lg font-semibold">
                                    {file ? `File: ${file.name}` : "Drag and Drop your File Here or Click to Select"}
                                </span>
                            </label>
                        </div>
                        <div className="text-white px-4 mt-4">
                            <h2 className="font-bold text-xl flex justify-center ">Select Your Data Analysis Type</h2>
                            <div className="flex flex-wrap justify-center gap-3 mt-5">
                                {options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => toggleOption(index)}
                                        className={`px-3 py-1 rounded-full font-medium transition-colors duration-300 flex items-center gap-x-2 ${
                                            option ? "bg-green-500 text-white" : "bg-white text-gray-800"
                                        }`}
                                    >
                                        {optionData[index].icon}
                                        {optionData[index].label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center gap-y-2 mt-4">
                            <button
                                className="py-2 px-6 font-bold text-2xl bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300"
                                type="button"
                                onClick={handleUpload}
                            >
                                Upload
                            </button>
                            <button
                                className="py-2 px-6 font-bold text-2xl bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
                                type="button"
                                onClick={handleDiscard}
                            >
                                Discard
                            </button>
                        </div>
                    </>
                ) : (
                    <Instructions SetShowForm={setShowForm} />
                )}
            </div>
        </>
    );
}

export default DataAnalysisForm;
