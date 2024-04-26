import React from "react";

export default function Card({ Title, Desc }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-900 ease-in-out transform hover:scale-105 overflow-hidden p-4">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold mb-2">{Title}</h2>
        <p className="text-gray-700">{Desc}</p>
      </div>
    </div>
  );
}
