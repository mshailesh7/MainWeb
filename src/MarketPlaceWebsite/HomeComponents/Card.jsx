import React from "react";

export default function Card({ Title, Desc }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden py-10 hover:bg-gradient-to-br from-red-100 to-red-200">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-bold mb-2">{Title}</h2>
        <p className="text-gray-900 p-8">{Desc}</p>
      </div>
    </div>
  );
}
