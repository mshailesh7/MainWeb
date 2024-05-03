import React from "react";
import Card from "./Card";
import ArBorTagAnalysis_Data from "../../../pages/ArBorTagAnalysis_Data.json";
import { Link } from "react-router-dom";
function CardCollection() {
  return (
    <div className="my-8 flex flex-col mx-auto ">
      {" "}
      <h1 className="text-center my-12 text-xl font-semibold">
        Explore the power of Your Data
      </h1>
      <div className="flex gap-x-12 justify-center gap-y-8 hover:cursor-pointer flex-wrap ">
        {ArBorTagAnalysis_Data.sections.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            text={item.text.paragraphs}
          />
        ))}
      </div>
      <h1 className="mx-auto my-16 text-2xl font-serif">
        Ready to Unlock Insights?{" "}
        <Link to="/UploadAnalysis" className="text-blue-500">
          Click Here
        </Link>{" "}
        to Analyze Your Data Now!
      </h1>
    </div>
  );
}

export default CardCollection;
