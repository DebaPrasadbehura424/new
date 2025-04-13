import React from "react";
import img1 from "../images/img1.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-cyan-100 font-sans py-16 min-h-screen flex items-center">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <section className="space-y-6 animate-fadeInLeft">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight">
            Hi, I'm DebaPrasad!
          </h2>
          <p className="text-navy-700 text-base sm:text-lg leading-relaxed">
            I am a passionate and skilled developer with expertise in modern web
            technologies, backend development, and creative design. My strong
            problem-solving abilities and attention to detail ensure the
            delivery of efficient and maintainable code.
          </p>
          <p className="text-navy-700 text-base sm:text-lg leading-relaxed">
            Whether it's building full-stack applications, optimizing backend
            systems, or crafting intuitive user experiences, I am dedicated to
            delivering robust and scalable solutions.
          </p>

          <div className="flex items-center gap-2 justify-center">
            <div className="mt-8">
              <NavLink
                to="/contactus"
                className="inline-block bg-cyan-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-cyan-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Hire me
              </NavLink>
            </div>
            <div className="mt-8">
              <NavLink
                to="/resume"
                className="inline-block bg-cyan-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-cyan-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Resume
              </NavLink>
            </div>
          </div>
        </section>
        <section className="flex justify-center animate-fadeInRight">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
            <div className="absolute inset-0 bg-cyan-400 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            <img
              src={img1}
              alt="DebaPrasad Behura"
              className="relative rounded-2xl w-full h-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
