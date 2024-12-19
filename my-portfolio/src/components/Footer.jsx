import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socialMedia = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20}/>,
    color: "#0077B5",
    url: "https://linkedin.com/in/sehrish-tanveer-500283279",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={20}/>,
    color: "#333",
    url: "https://github.com/SehrishTanveer2002",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={20}/>,
    color: "#D44638",
    url: "mailto:sehrishtanveer249@gmail.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    color: "#E1306C",
    url: "https://instagram.com/sehrish._.tanvir",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-900 py-10 pt-20">
      <div className="container mx-auto flex justify-center space-x-8">
        {socialMedia.map((social, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Social Button */}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ color: "#000" }}
            >
              {social.icon}
            </a>

            {/* Tooltip */}
            <div
              className="absolute bottom-full mb-4 w-max px-6 py-2 rounded-3xl text-white text-sm bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                backgroundColor: social.color,
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", 
              }}
            >
              {social.name}
              <div
                className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"
                style={{ backgroundColor: social.color }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-400 mt-5 pt-5 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2024 Sehrish Tanveer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;




