import React from "react";
import Card from "./Card";
import ArBorTagAnalysis_Data from "../../../pages/ArBorTagAnalysis_Data.json";
import { Link } from "react-router-dom";

function CardCollection() {
  return (
    <div id="card-collection" className="my-12 px-4">
      <h1 className="text-center my-8 text-4xl font-bold uppercase">
        Explore the Power of Your Data!
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {ArBorTagAnalysis_Data.sections.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            text={item.text.paragraphs}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        <h1 className="text-center bg-blue-400 text-3xl py-5 px-5 font-serif font-bold mt-10 mb-10">
          Ready to Unlock Insights?{" "}
          <Link to="/UploadAnalysis" className="text-red-800 hover:text-red-600 underline">
            Click Here
          </Link>{" "}
          to Analyze Your Data Now!
        </h1>
      </div>
    </div>
  );
}

export default CardCollection;
