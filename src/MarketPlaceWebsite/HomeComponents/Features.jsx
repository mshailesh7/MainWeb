import React from "react";
import Card from "./Card";

function Features() {
  return (
    <div className="bg-gradient-to-br from-gray-300 to-green-200 py-12 px-4">
      <h1 className="text-center text-6xl font-bold text-purple-700 my-10">
        Key Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 px-4">
        <Card
          Title="Compliance Simplification"
          Desc="Streamline compliance processes with easy access to verified carbon credits from reputable projects registered under Verra and Gold Standard."
        />
        <Card
          Title="Seamless Trading Experience"
          Desc="Facilitate smooth transactions through an intuitive user interface. Easily navigate the marketplace to discover, purchase, or sell carbon credits."
        />
        <Card
          Title="Assurance of Quality"
          Desc="Guarantee the authenticity and integrity of carbon credits through rigorous verification processes."
        />
        <Card
          Title="Excellence in Project Selection"
          Desc="Empower sellers to showcase their projects and attract buyers through transparent project documentation and performance metrics."
        />
        <Card
          Title="Comprehensive Reporting and Documentation"
          Desc="Ensure transparency and accountability in carbon credit transactions with comprehensive audit trails and documentation."
        />
        <Card
          Title="Customizable Notifications and Alerts"
          Desc="Receive timely updates on carbon credit availability, pricing changes, and regulatory developments."
        />
      </div>
    </div>
  );
}

export default Features;
