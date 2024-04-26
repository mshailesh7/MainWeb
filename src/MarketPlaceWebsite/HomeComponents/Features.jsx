import Card from "./Card";

function Features() {
  return (
    <div className="bg-white mb-64">
      <h1 className=" text-center text-6xl  w-fit mx-auto my-8 md:hidden">
        Features
      </h1>
      <div className="flex justify-around max-md:flex-col max-md:gap-y-3 ">
        <Card
          Title={`Compliance Simplification`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`Streamline compliance procecesses with easy access to verified carbon credit from reputable project registered under verra and gold standard`}
          position={0}
        />
        <Card
          Title={`Seamless trading experience`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`Facilitate smooth transactions through an intutive user interface. Easily navigate the marketplace to discover, purchase, or sell carbon credits.

          `}
          position={-1}
        />
        <Card
          Title={`Assurance of Quality`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`We guarantee the authenticity and integrity of carbon credits through rigrous verification processess


          `}
          position={0}
        />
      </div>
      <h3 className=" text-center text-6xl  w-fit mx-auto my-8 max-md:hidden max-md:my-0">
        Features
      </h3>

      <div className="flex  max-md:flex-col max-md:gap-y-3 max-md:mt-4">
        <Card
          Title={`Excellence in project Selection`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`We empower the seller to showcase their projects and attract buyers through transparent project documentation and performance matrics

      `}
          position={1}
        />
        <Card
          Title={`Comprehensive Reporting and Documentation`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`We ensure transparency and accountability in carbon credit transactions with comprehensive audit trails and documentation.

      `}
          position={0}
        />
        <Card
          Title={`Customizable Notifications and Alerts`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`Receive timely updates on carbon credit availability, pricing changes, and regularity developments.
      

      `}
          ButtonText={`Show Description`}
          Link_To={`Blogview`}
          position={1}
        />
      </div>
    </div>
  );
}

export default Features;
