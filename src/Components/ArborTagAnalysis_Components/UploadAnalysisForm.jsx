import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IoCloudUpload } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import DataAnalysisForm from "./DataAnalysisForm";
import Instructions from "./Instructions";
import {
  MdIntegrationInstructions,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";

function UploadAnalysisForm() {
  const [ShowInstructions, SetShowInstructions] = useState(false);
  return (
    <>
      {!ShowInstructions ? (
        <DataAnalysisForm SetShowInstructions={SetShowInstructions} />
      ) : (
        <Instructions SetShowInstructions={SetShowInstructions}></Instructions>
      )}
    </>
  );
}

export default UploadAnalysisForm;
