import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaFigma,
  FaPaintBrush,
  FaServer,
  FaPython,
  FaCogs,
} from "react-icons/fa";

function Skills(props) {
  return (
    <div className="bg-teal-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-900 text-center mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaHtml5 className="text-orange-600 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              HTML5
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaCss3Alt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              CSS3
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaJsSquare className="text-yellow-600 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              JavaScript
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaReact className="text-cyan-600 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              React
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaNodeJs className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              Node.js
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaDatabase className="text-orange-700 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              MongoDB
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaPaintBrush className="text-pink-600 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              SpringBoot
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaServer className="text-gray-600 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              MySQL
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaServer className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              Hibernate
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaJava className="text-red-600 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              Java
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaCogs className="text-gray-700 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              C++
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <FaFigma className="text-blue-800 text-4xl mx-auto mb-4" />
            <h3 className="text-sm sm:text-base font-semibold text-teal-900 text-center">
              Figma
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
