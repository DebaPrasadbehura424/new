import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" px-4 py-4 sticky top-0 z-50 shadow-lg ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-cyan-400">@Dev</div>
        </div>
        <div className="hidden md:flex space-x-8">
          <div className="text-lg font-medium">
            <NavLink
              to="/"
              className="hover:text-cyan-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </div>
          <div className="text-lg font-medium">
            <NavLink
              to="/projects"
              className="hover:text-cyan-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
          </div>
          <div className="text-lg font-medium">
            <NavLink
              to="/contactus"
              className="hover:text-cyan-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <FaBars
            className="text-2xl cursor-pointer hover:text-cyan-300 transition-colors duration-300"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } mt-4 space-y-4 bg-navy-800 bg-opacity-95 rounded-lg p-4 animate-slideDown`}
      >
        <div className="text-lg font-medium">
          <NavLink
            to="/"
            className="block text-black hover:text-cyan-300 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </div>
        <div className="text-lg font-medium">
          <NavLink
            to="/projects"
            className="block text-black hover:text-cyan-300 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
        </div>
        <div className="text-lg font-medium">
          <NavLink
            to="/contactus"
            className="block text-black hover:text-cyan-300 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="flex justify-end">
          <FaTimes
            className="text-2xl cursor-pointer hover:text-cyan-300 transition-colors duration-300"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
