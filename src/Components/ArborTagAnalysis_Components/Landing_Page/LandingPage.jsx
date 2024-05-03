import React from "react";

function LandingPage() {

  const scrollToCardCollection = () => {
    const section = document.getElementById('card-collection');
    if (section) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="relative text-center bg-cover bg-center min-h-screen"
        style={{ backgroundImage: 'url("../src/Asset/DataAnalysisLanding.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-black opacity-90">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="p-4 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold drop-shadow-lg">
                Welcome to Data Analysis
              </h1>
              <p className="text-xl md:text-2xl font-semibold lg:text-3xl text-white mt-4 md:mt-6 drop-shadow-md">
                Unleash the power of your data with advanced analysis tools.
              </p>
              <button
                onClick={scrollToCardCollection}
                className="px-8 py-3 text-2xl font-bold bg-green-700 text-white rounded-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
