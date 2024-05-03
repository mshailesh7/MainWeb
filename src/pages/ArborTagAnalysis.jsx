import { Link } from "react-router-dom";
import ArBorTagAnalysis_Data from "./ArBorTagAnalysis_Data.json";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import LandingPage from "../Components/ArborTagAnalysis_Components/Landing_Page/LandingPage";
import CardCollection from "../Components/ArborTagAnalysis_Components/Landing_Page/CardCollection";
import GetInTouchForm from "../Components/ArborTagAnalysis_Components/Landing_Page/GetInTouchForm";
const AiborTagAnalysis = () => {
  const [ShowForm, SetShowForm] = useState(false);

  return (
    <div className="mt-20 h-screen flex flex-col justify-between ">
      <LandingPage />
      <CardCollection />
      <GetInTouchForm />
    </div>
  );
};

export default AiborTagAnalysis;
