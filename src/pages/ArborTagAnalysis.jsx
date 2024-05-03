import { Link } from "react-router-dom";
import ArBorTagAnalysis_Data from "./ArBorTagAnalysis_Data.json";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import LandingPage from "../Components/ArborTagAnalysis_Components/Landing_Page/LandingPage";
import CardCollection from "../Components/ArborTagAnalysis_Components/Landing_Page/CardCollection";
import GetInTouchForm from "../Components/ArborTagAnalysis_Components/Landing_Page/LatestUpdates";
const ArborTagAnalysis = () => {
  const [ShowForm, SetShowForm] = useState(false);

  return (
    <div className="mt-20 flex flex-col justify-between ">
      <LandingPage />
      <CardCollection />
      <GetInTouchForm />
    </div>
  );
};

export default ArborTagAnalysis;
