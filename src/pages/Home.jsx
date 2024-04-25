const Home = () => {
  return (
    <div className="relative">
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: " url('src/Asset/trees3.png')",
        }}
      >
        <div className="absolute inset-0 bg-transparent opacity-50"></div>
        <div className="text-center text-white relative z-10">
          <div className="bg-white bg-opacity-5 py-8 px-12 rounded-lg mt-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Environmental
            </h1>
            <div className="mt-1"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Audits Made Easy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mt-6">
              We provide eco-friendly
              <div className="mt-1"></div> engineering solutions for
              <div className="mt-1"></div>sustainable development.
            </p>
            <button className="bg-green-400 hover:bg-green-700 text-black font-bold py-2.5 px-12 rounded-lg mt-8 transition duration-300 ease-in-out">
              View Products
            </button>
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center bg-gray-800 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('path_to_background_image.jpg')",
          }}
        ></div>
        <div className="text-white relative z-10">
          <div className="bg-black bg-opacity-50 py-40 px-60 rounded-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg"
                src=""
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white absolute top-1 left-80 ml-80 mt-1">
          Video
        </h2>
        <h2 className="text-base sm:text-lg md:text-xl text-white absolute top-10 left-60 ml-80 mt-5">
          Conventional Tree Tagging vs ArborTag
        </h2>
      </section>

      <section className="h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-black">
          Photo Gallery
        </h2>
        <div className="mt-3"></div>

        <div className="grid grid-cols-3 gap-2">
          <img
            src="src\Asset\tree1.jpeg"
            alt="Image 1"
            className="rounded-lg"
          />
          <img
            src="src\Asset\tree2.jpeg"
            alt="Image 2"
            className="rounded-lg"
          />
          <img
            src="src\Asset\tree3.jpeg"
            alt="Image 3"
            className="rounded-lg"
          />
          <img
            src="src\Asset\tree4.jpeg"
            alt="Image 4"
            className="rounded-lg"
          />
          <img
            src="src\Asset\tree5.jpeg"
            alt="Image 5"
            className="rounded-lg"
          />
          <img
            src="src\Asset\tree6.jpeg"
            alt="Image 6"
            className="rounded-lg"
          />
        </div>
      </section>

      <footer
        className="bg-gray-400 py-12 px-6"
        style={{ backgroundImage: "url('src/Asset/treelast.jpeg')" }}
      >
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white underline">
              Get Latest Updates
            </h2>
            <form className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-2">
                <label
                  htmlFor="email"
                  className="text-white text-xl mr-4 font-bold"
                >
                  Subscribe to Newsletter:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  className="rounded-lg py-2 px-6"
                />
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
