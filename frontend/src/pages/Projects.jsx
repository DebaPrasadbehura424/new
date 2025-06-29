import React from "react";

function Projects() {
  const projectData = [
    {
      name: "Online Exam Portal",
      description:
        "Helps to create questionPaper ans student can attend them and follow there fav. teachers",
      technologies: "React, Tailwind CSS, Node.js,Mongodb ,Springboot",
      link: "https://online-exam-forntendnode.vercel.app",
    },
    {
      name: "Athletiqo",
      description: "Online ecommerce and fitness application",
      technologies: "React, Tailwind CSS, Node.js,Mongodb ,Springboot",
      link: "https://athletiqo-frontend.vercel.app",
    },
    {
      name: "MilkyWay",
      description: "Online Quiz page over 1500+ quiz on programming",
      technologies: "React, Tailwind CSS,famer-motion",
      link: "https://millkway-frontend.vercel.app",
    },
    {
      name: "Preptail",
      description: "Preptail over 170 dsa question suggestion",
      technologies: "React, Tailwind CSS, Node.js,Mongodb",
      link: "https://placement-frontend-theta.vercel.app",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 py-16 w-full min-h-screen flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              {project.name}
            </h3>
            <p className="text-slate-600 text-base mb-4">
              {project.description}
            </p>
            <p className="text-slate-700 text-sm font-medium mb-4">
              <strong>Technologies Used:</strong> {project.technologies}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-teal-500 font-semibold hover:text-teal-600 transition-colors duration-300"
            >
              View Live Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
