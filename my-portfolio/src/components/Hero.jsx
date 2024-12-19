import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "./Button"; 

const socialMedia = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    url: "https://linkedin.com/in/sehrish-tanveer-500283279",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={30} />,
    url: "https://github.com/SehrishTanveer2002",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={30} />,
    url: "mailto:sehrishtanveer249@gmail.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={30} />,
    url: "https://instagram.com/sehrish._.tanvir",
  },
];


const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="relative bg-gray-200 bg-cover bg-center h-screen flex flex-col justify-center text-gray-800 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full z-0">
  <div className="
    absolute top-28
    right-[12vh] 
    w-full h-28
    bg-gray-300 opacity-75 
    transform -rotate-45
    sm:right-[30vw] sm:h-28 
    md:right-[30vw] md:h-28  md:top-6
    lg:right-[29vw] lg:h-30 lg:top-6
  "></div>

  <div className="
    absolute bottom-3
    right-[12vh] 
    w-full h-32 
    bg-gray-300 opacity-75 
    transform rotate-45
    sm:right-[24vw] sm:h-28 
    md:right-[34vw] md:h-28 
    lg:right-[31vw] lg:h-32
  "></div>
</div>


      {/* Social Icons Sidebar */}
      <div className="absolute top-[53vh] left-0 transform -translate-y-1/2 bg-white shadow-lg px-1 py-1 hidden md:flex md:flex-col items-center space-y-4 rounded-md z-20">
        {socialMedia.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-transparent text-black hover:bg-gray-700 hover:text-white transition-all duration-300"
            whileHover={{ scale: 0.85 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/*  Content */}
      <div className="z-10 px-6 md:px-20 text-left mt-24">
        <h1 className="text-8xl md:text-[120px] lg:text-[150px] font-black md:-mt-20 md:leading-[110px] lg:leading-[130px] lg:tracking-wide xl:ml-2">
          Sehrish <span className="tracking-wide">Tanveer</span>
        </h1>
        <p className="text-xl sm:text-xl md:text-2xl md:ml-6 lg:text-3xl lg:ml-6 xl:text-[30px] mt-3 tracking-wide text-gray-700 ml-4">
    Coding the Future with <span className="text-gray-900 font-semibold">Heart & Tech</span>
  </p>
      </div>

      <div className="flex space-x-4 mt-5 ml-10 md:ml-24">
        <Button text="About Me" styleType="primary" onClick={() => handleNavigate("/about")}/>
        <Button text="Contact Me" styleType="secondary" onClick={() => handleNavigate("/contact")} />
      </div>
    </div>
  );
};

export default Hero;









