import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-teal-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          <div className="text-3xl hover:text-teal-300 transition-colors duration-300">
            <FaFacebook />
          </div>
          <div className="text-3xl hover:text-teal-300 transition-colors duration-300">
            <FaTwitter />
          </div>
          <div className="text-3xl hover:text-teal-300 transition-colors duration-300">
            <FaLinkedin />
          </div>
          <div className="text-3xl hover:text-teal-300 transition-colors duration-300">
            <FaGithub />
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>© 2025 My Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
