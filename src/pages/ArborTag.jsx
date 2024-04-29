function Video() {
  return (
    <>
      <div className="text-center text-black bg-gray-100 my-36">
        <h2 className="text-5xl font-bold pt-8 select-none">Video</h2>
        <p className="text-xl pb-5 select-none">
          Conventional Tree Tagging vs ArborTag
        </p>
        <div
          className="rounded-lg shadow-lg overflow-hidden mx-auto"
          style={{ maxWidth: "960px" }}
        >
          <iframe
            className="w-full h-[560px] md:h-[500px] rounded-lg select-none"
            src="https://www.youtube.com/embed/pbiR9pDhr94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm pt-5 pb-10 text-gray-600 italic select-none">
          Explore the benefits of our innovative tagging technology.
        </p>
      </div>
    </>
  );
}

function ArborTag() {
  return (
    <div>
      <Video />
    </div>
  );
}

export default ArborTag;
