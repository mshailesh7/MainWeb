import Card from "./Card";

function Features() {
  return (
    <div className="bg-white mb-64">
      <div className="flex justify-around max-md:flex-col max-md:gap-y-3 ">
        <Card
          Title={`Compliance Simplification`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`Streamline compliance procecesses with easy access to verified carbon credit from reputable project registered under verra and gold standard
          


          `}
          ButtonText={`Show Description`}
          Link_To={`Blogview`}
          position={0}
        />
        <Card
          Title={`Compliance Simplification`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`Streamline compliance procecesses with easy access to verified carbon credit from reputable project registered under verra and gold standard
          

          `}
          ButtonText={`Show Description`}
          Link_To={`Blogview`}
          position={-1}
        />
        <Card
          Title={`Compliance Simplification`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`Streamline compliance procecesses with easy access to verified carbon credit from reputable project registered under verra and gold standard
          


          `}
          ButtonText={`Show Description`}
          Link_To={`Blogview`}
          position={0}
        />
      </div>
      <h3 className=" text-center text-6xl  w-fit mx-auto my-8">Features</h3>

      <div className="flex  max-md:flex-col max-md:gap-y-3 max-md:mt-4">
        <Card
          Title={`Compliance Simplification`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`Streamline compliance procecesses with easy access to verified carbon credit from reputable project registered under verra and gold standard
       


      `}
          ButtonText={`Show Description`}
          Link_To={`Blogview`}
          position={1}
        />
        <Card
          Title={`Compliance Simplification`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`Streamline compliance procecesses with easy access to verified carbon credit from reputable project registered under verra and gold standard
    


      `}
          ButtonText={`Show Description`}
          Link_To={`Blogview`}
          position={0}
        />
        <Card
          Title={`Compliance Simplification`}
          Img={`https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp`}
          Desc={`Streamline compliance procecesses with easy access to verified carbon credit from reputable project registered under verra and gold standard
       
      

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
