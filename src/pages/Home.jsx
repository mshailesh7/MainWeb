import React from "react";
import MainHomeLanding from "/src/Asset/MainHomeLanding.png";
import AboutUs from "./AboutUs.jsx";
const BackgroundSection = ({ children }) => (
  <div className="h-screen" style={{ maxHeight: "60vh" }}>
    <div
      className="absolute inset-0 bg-black opacity-90 bg-cover bg-center"
      style={{ backgroundImage: `url(${MainHomeLanding})` }}
    />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

const VideoSection = () => (
  <div className="text-center text-black">
    <h2 className="text-5xl font-bold pt-10">Video</h2>
    <p className="text-xl pb-10">Conventional Tree Tagging vs ArborTag</p>
    <div className="rounded-lg shadow-lg mx-auto" style={{ maxWidth: "960px" }}>
      <iframe
        className="w-full h-[560px] md:h-[500px] rounded-lg"
        src="https://www.youtube.com/embed/pbiR9pDhr94"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

const PhotoGallery = () => (
  <div className="bg-white py-8">
    <div className="container mx-auto">
      <h2 className="text-5xl mb-6 text-center text-black" draggable>
        Photo Gallery
      </h2>
      <div className="flex flex-wrap justify-center">
        {Array.from({ length: 6 }, (_, i) => (
          <img
            key={i}
            src={`src/Asset/Image${i + 1}.png`}
            alt={`Image ${i + 1}`}
            className="w-96 scale-75 h-auto rounded-lg shadow-md hover:shadow-xl duration-300 transition-all hover:scale-90 hover:cursor-pointer"
          />
        ))}
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-400 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-white underline">
        Get Latest Updates
      </h2>
      <form className="flex flex-col items-center mt-8">
        <div className="flex items-center max-md:flex-col max-md:gap-y-8">
          <label htmlFor="email" className="text-xl mr-4 font-bold text-white">
            Subscribe to Newsletter:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="rounded-lg px-6"
            aria-label="Email Address"
          />
          <button
            type="button"
            className="focus:outline-none text-white bg-green-600 hover:opacity-95 py-2 px-8 rounded-md mx-4"
          >
            Green
          </button>
        </div>
      </form>
    </div>
  </footer>
);

const Home = () => (
  <div>
    <BackgroundSection>
      <div className="text-center text-white">
        <div className="bg-black bg-opacity-60 p-10 rounded-lg mt-96 shadow-xl">
          <h1 className="text-5xl font-bold">Environmental Audits Made Easy</h1>
          <p className="text-2xl mt-6">
            We provide eco-friendly engineering solutions for sustainable
            development.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-14 rounded-lg mt-8 transition duration-300 ease-in-out shadow-lg">
            View Products
          </button>
        </div>
      </div>
    </BackgroundSection>
    <VideoSection />
    <AboutUs />
    <PhotoGallery />
    <Footer />
  </div>
);

export default Home;
