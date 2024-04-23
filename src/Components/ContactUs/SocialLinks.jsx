import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mt-5">
      <FaLinkedin className="text-3xl text-blue-700 cursor-pointer hover:text-blue-800" />
      <FaFacebook className="text-3xl text-blue-600 cursor-pointer hover:text-blue-700" />
      <FaGithub className="text-3xl text-gray-700 cursor-pointer hover:text-black" />
    </div>
  );
}
