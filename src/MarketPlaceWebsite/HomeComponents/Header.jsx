function Header() {
  return (
    <div
      className=" bg-cover w-screen text-center mt-20 flex justify-center flex-col text-green-800 gap-y-20"
      style={{
        backgroundImage: "url('src/Asset/lushforest.png')",
        height: "50rem",
      }}
    >
      <h1 className="text-black text-3xl">
        Welcome To NatureMark Systems MarketPlace
      </h1>
      <p className="text-blue-800 font-bold w-9/12 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        officiis atque odio libero harum, veritatis sint sed exercitationem
        ullam eaque vitae mollitia. Deserunt quibusdam repellendus assumenda
        aliquid necessitatibus perspiciatis id, fugiat omnis incidunt inventore
        illo in possimus at, vel adipisci quos repudiandae ipsa corrupti
        praesentium totam dolores. At, perferendis mollitia.
      </p>
      <button
        type="button"
        className="text-white w-36 ml-auto mr-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
    </div>
  );
}

export default Header;
