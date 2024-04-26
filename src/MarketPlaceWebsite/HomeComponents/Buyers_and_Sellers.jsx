import React from "react";
import Buyers_and_Sellers_Component from "./Buyers_and_Sellers_Component";
function Buyers_and_Sellers() {
  return (
    <div className="bg-green-100 py-12">
      <h1 className="text-center mb-8 text-4xl font-bold text-purple-600">
        Benefits
      </h1>
      <div className="flex justify-center gap-x-4 max-md:flex-col">
        <div className="flex flex-col gap-y-5 max-md:mx-auto">
          <h1 className="text-2xl font-bold max-md:text-center">Buyers</h1>
          <Buyers_and_Sellers_Component
            Rules={`Early Source verified carbon credits to meet regulatory requirements and streamline compliance processes.`}
          />
          <Buyers_and_Sellers_Component
            Rules={`Diversify carbon reduction strategies and mitigate regulatory and financial risks associated with carbon emissions`}
          />
          <Buyers_and_Sellers_Component
            Rules={`Gain access to a diverse range of carbon credit projects globally, allowing for tailored emission reduction strategies`}
          />
          <Buyers_and_Sellers_Component
            Rules={`Secure cost-effective carbon credits, optimizing carbon reduction efforts and reducing overall compliance costs.`}
          />
        </div>
        <div className="flex flex-col gap-y-5 max-md:mx-auto">
          {" "}
          <h1 className="text-2xl font-bold max-md:text-center">Sellers</h1>
          <Buyers_and_Sellers_Component
            Rules={`Generate revenue streams by moetizing carbon reduction efforts through the sale of verified carbon credits.`}
          />
          <Buyers_and_Sellers_Component
            Rules={`Showcase sustainability initiatives to a global audience, enhancing brand reputation and attacting environmentally concious investors.`}
          />
          <Buyers_and_Sellers_Component
            Rules={`Access capital for implementing carbon reduction projects, accelerating th transition to low-carbon practices.`}
          />
          <Buyers_and_Sellers_Component
            Rules={`Forge partnerships with buyers to support sustainable development goals and create shared value through carbon credit transactions.`}
          />
        </div>
      </div>
    </div>
  );
}

export default Buyers_and_Sellers;
