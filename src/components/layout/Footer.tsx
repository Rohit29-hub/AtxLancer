
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4 border-t-4 mb-">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo and About */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-green-400 text-2xl font-bold">ATxlancer</h2>
          <p className="mt-2 text-sm">
            Your gateway to finding skilled freelancers and achieving your project
            goals efficiently and affordably.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-green-400 text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#about" className="hover:text-green-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-400">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-green-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-green-400 text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-lg">
            <a
              href="#facebook"
              className="hover:text-green-400"
              aria-label="Facebook"
            >
              <FaFacebook />

            </a>
            <a
              href="#twitter"
              className="hover:text-green-400"
              aria-label="Twitter"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="#instagram"
              className="hover:text-green-400"
              aria-label="Instagram"
            >
            <FaInstagramSquare />

            </a>
            <a
              href="#linkedin"
              className="hover:text-green-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin />

            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-700 my-6" />
      <div className="text-center text-sm">
        &copy; 2025 ATxlancer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

