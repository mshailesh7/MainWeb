import { Link } from "react-router-dom";

export default function Card({
  Link_To,
  Title,
  Desc,
  Img,
  Quote,
  ButtonText,
  Link_To2,
  position,
}) {
  return (
    <>
      <div
        className={`mx-auto bg-green-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-60 max-md:w-96 duration-300 ease-in-out transition-transform transform hover:scale-95 ${
          position == 0
            ? "mt-16 max-md:mt-0"
            : position === -1
            ? "mb-28 max-md:mt-0"
            : null
        }`}
      >
        <div className=" p-4  rounded-lg flex flex-col gap-y-3 justify-center opacity-85">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
          <h2 className="font-bold text-center text-lg">{Title}</h2>
          <p className=" text-center">{Desc}</p>
          <Link className="underline mx-auto font-bold underline-offset-4 border-opacity-55">
            MORE
          </Link>
        </div>
      </div>
    </>
  );
}
