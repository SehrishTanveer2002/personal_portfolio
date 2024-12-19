import React, { useState } from "react";
const projects = [
  {
    title: "Portfolio Website",
    type: "Web Application",
    description: "A personal portfolio that displays my projects, skills, contact details, and a brief about myself.",
    image: "personal_portfolio.png", 
    technologies: [
        { name: "HTML", icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
        { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
        { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
      { name: "React", icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
      { name: "TailwindCSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "Framer Motion", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
      { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "VSCode", icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" },
    ],
    link: "#",
  },
  {
    title: "DataWhiz - An Automated Tool for Data Insights",
    type: "Web Application",
    image: "dataWhiz.png",
    description: "An innovative tool that automates data analysis and provides insights.",
    technologies: [
        { name: "HTML", icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
        { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
        { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
      { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
      { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "VSCode", icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" },
    ]
  },
];

const Project = () => {
  return (
    <div className="relative bg-gray-200 bg-cover bg-center min-h-screen flex flex-col justify-center text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-36 mb-7">
          <span className="text-gray-700 text-xl font-semibold">
          Here are some of the projects I've worked on recently.
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-800 rounded-lg transition-all transform hover:-translate-y-2 hover:shadow-lg cursor-pointer mt-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-100 mb-2">
          <a
            href={project.link}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {project.title}
          </a>
        </h3>
        <span className="text-gray-400 text-lg">{project.type}</span>
        <div className="text-gray-300 mt-2">
          {isHovered ? (
            <div className="space-y-2">
              <h4 className="text-gray-100 font-semibold">Technologies:</h4>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 mx-2"
                    />
                    <p className="text-gray-800 text-xl font-medium">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-lg">{project.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;



