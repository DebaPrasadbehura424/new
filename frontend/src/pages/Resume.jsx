import React from "react";
import img1 from "../images/img1.png";
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

const Resume = () => {
  const projectData = [
    {
      name: "Online Exam Portal",
      description:
        "Helps to create questionPaper ans student can attend them and follow there fav. teachers",
      technologies: "React, Tailwind CSS, Node.js, MongoDB, Springboot",
      link: "https://online-exam-forntendnode.vercel.app",
    },
    {
      name: "Athletiqo",
      description: "Online ecommerce and fitness application",
      technologies: "React, Tailwind CSS, Node.js, MongoDB, Springboot",
      link: "https://athletiqo-frontend.vercel.app",
    },
  ];

  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-500 text-3xl" />,
    },
    { name: "React", icon: <FaReact className="text-cyan-500 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    {
      name: "MongoDB",
      icon: <FaDatabase className="text-orange-600 text-3xl" />,
    },
    { name: "MySQL", icon: <FaServer className="text-gray-400 text-3xl" /> },
    {
      name: "Hibernate",
      icon: <FaServer className="text-purple-500 text-3xl" />,
    },
    { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-600 text-3xl" /> },
    { name: "C++", icon: <FaCogs className="text-gray-500 text-3xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 text-3xl" /> },
    {
      name: "UI/UX Design",
      icon: <FaPaintBrush className="text-pink-400 text-3xl" />,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-slate-900 text-white py-8 px-6 sm:px-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-slate-300 flex items-center justify-center overflow-hidden">
            <span className="text-slate-600 text-sm sm:text-base">
              <img src={img1} alt="myphot" />
            </span>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Deba Prasad Behura
            </h1>
            <p className="text-lg sm:text-xl text-teal-300 mt-2">
              Full-Stack Developer
            </p>
            <p className="text-sm sm:text-base mt-2">
              Email: debaprasadbehura89@gmail.com || Phone: +91 9777337233
            </p>
            <p className="text-sm sm:text-base">Bhubaneswar, Odisha, India</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Skills, Education */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-slate-700 text-sm sm:text-base"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Education
              </h2>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-slate-800">
                  Bachelor of Technology
                </h3>
                <p className="text-slate-700 text-sm sm:text-base">
                  College of Engineering, Bhubaneswar
                </p>
                <p className="text-slate-600 text-sm">
                  2021 - Present (Final Year)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Objective, Projects, Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Objective */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Objective
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Passionate and detail-oriented final-year B.Tech student seeking
                opportunities to apply expertise in full-stack development,
                problem-solving, and creative design. Committed to building
                scalable, user-centric applications that drive innovation and
                efficiency.
              </p>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Projects
              </h2>
              <div className="space-y-6">
                {projectData.map((project, index) => (
                  <div key={index} className="border-l-4 border-teal-500 pl-4">
                    <h3 className="text-lg font-medium text-slate-800">
                      {project.name}
                    </h3>
                    <p className="text-slate-700 text-sm sm:text-base mt-1">
                      {project.description}
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      <strong>Technologies:</strong> {project.technologies}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 text-sm hover:text-teal-600 transition-colors duration-300"
                    >
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-slate-800">
                    Freelance Developer
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Self-Employed | 2023 - Present
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base mt-1">
                    Developed and deployed web applications for small
                    businesses, focusing on responsive design and backend
                    optimization using React, Node.js, and MongoDB.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800">
                    Intern, Web Development
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Tech Startup, Bhubaneswar | Summer 2024
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base mt-1">
                    Contributed to building a full-stack e-commerce platform,
                    implementing UI/UX designs with Figma and optimizing
                    database queries with MySQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
