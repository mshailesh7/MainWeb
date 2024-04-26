import React from "react";
import Buyers_and_Sellers_Component from "./Buyers_and_Sellers_Component";

function Buyers_and_Sellers() {
  return (
    <div className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-center mb-10 text-4xl font-bold text-white drop-shadow-lg">
          WHY CHOOSE NATUREMARK SYSTEMS !
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <h2 className="text-3xl font-bold text-center mb-5 text-black">Buyers</h2>
            <Buyers_and_Sellers_Component
              Rules={`Early Source verified carbon credits to meet regulatory requirements and streamline compliance processes.`}
            />
            <Buyers_and_Sellers_Component
              Rules={`Diversify carbon reduction strategies and mitigate regulatory and financial risks associated with carbon emissions.`}
            />
            <Buyers_and_Sellers_Component
              Rules={`Gain access to a diverse range of carbon credit projects globally, allowing for tailored emission reduction strategies.`}
            />
            <Buyers_and_Sellers_Component
              Rules={`Secure cost-effective carbon credits, optimizing carbon reduction efforts and reducing overall compliance costs.`}
            />
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <h2 className="text-3xl font-bold text-center mb-5 text-black">Sellers</h2>
            <Buyers_and_Sellers_Component
              Rules={`Generate revenue streams by monetizing carbon reduction efforts through the sale of verified carbon credits.`}
            />
            <Buyers_and_Sellers_Component
              Rules={`Showcase sustainability initiatives to a global audience, enhancing brand reputation and attracting environmentally conscious investors.`}
            />
            <Buyers_and_Sellers_Component
              Rules={`Access capital for implementing carbon reduction projects, accelerating the transition to low-carbon practices.`}
            />
            <Buyers_and_Sellers_Component
              Rules={`Forge partnerships with buyers to support sustainable development goals and create shared value through carbon credit transactions.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buyers_and_Sellers;
