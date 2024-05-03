import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
const GetInTouchForm = () => (
  <footer className="bg-gray-900 py-12 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center underline decoration-green-600 underline-offset-8">
        Get Latest Updates
      </h2>
      <p className="mt-6 max-w-lg mx-auto text-center text-lg">
        Join our newsletter to stay updated with the latest news and special
        announcements.
      </p>
      <form className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-center justify-center">
        <div className="flex-grow flex md:max-w-xl">
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            className="flex-1 rounded-l-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 py-3 px-8 rounded-r-md transition duration-300 ease-in-out shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <span className="text-sm uppercase tracking-wider">
          Follow us on social media
        </span>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/company/nature-mark-sys/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 transition-colors"
          >
            <FaLinkedin className="text-3xl hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.facebook.com/YourFacebookPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <FaFacebook className="text-3xl hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.instagram.com/Naturemarksystems"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 transition-colors"
          >
            <FaInstagram className="text-3xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default GetInTouchForm;
