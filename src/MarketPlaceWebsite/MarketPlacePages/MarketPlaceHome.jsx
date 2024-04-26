import Header from "../HomeComponents/Header";
import Features from "../HomeComponents/Features";
import Buyers_and_Sellers from "../HomeComponents/Buyers_and_Sellers";
function MarketPlaceHome() {
  return (
    <div className="">
      <Header />
      {/* <CarbonPrices /> */}
      <Features />
      <Buyers_and_Sellers />
    </div>
  );
}

import { useEffect } from "react";

// const CarbonPrices = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://carboncredits.com/live-carbon-prices/index.js.php";
//     script.async = true;
//     document.getElementById("carbon-prices").appendChild(script);

//     return () => {
//       // Cleanup function to remove the script when the component unmounts
//       document.getElementById("carbon-prices").removeChild(script);
//     };
//   }, []);

//   return (
//     <div className=" mx-auto mt-28">
//       <div id="carbon-prices" className="w-6/12 mx-auto"></div>
//     </div>
//   );
// };

export default MarketPlaceHome;
