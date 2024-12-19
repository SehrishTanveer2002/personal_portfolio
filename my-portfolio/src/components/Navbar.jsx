import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [isOpen, setIsOpen] = useState(false); 
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/projects", label: "Projects" },
    { id: "/contact", label: "Contact Me" },
  ];

  return (
    <nav
    className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
      isScrolled ? "bg-gray-300 shadow-md" : "bg-gray-200"
    }`}
  >
    {/* Navbar Container */}
<div className="container mx-auto flex items-center justify-between py-4 px-6">
{/* Nav Icon */}
<Link to="/">
          <motion.div
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            &lt;/Sehrish&gt;
          </motion.div>
        </Link>

  {/* Hamburger Menu and Theme Toggle for Mobile */}
  <div className="lg:hidden flex items-center gap-4">

     {/* Theme Toggle Button (Mobile Only) */}
     <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-700 text-gray-200 dark:text-yellow-400 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-600"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <motion.div
          whileHover={{ rotate: 15 }}
          whileTap={{ rotate: -15, scale: 0.9 }}
        >
          <BsMoon size={20} />
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ rotate: -15 }}
          whileTap={{ rotate: 15, scale: 0.9 }}
        >
          <BsSun size={20} />
        </motion.div>
      )}
    </button>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-8 h-6 flex flex-col justify-between items-center cursor-pointer"
      aria-label="Menu"
    >
      <span
        className={`w-full h-1 bg-gray-800 rounded transform transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-x-[5px] translate-y-[8px]" : ""
        }`}
      ></span>
      <span
        className={`w-full h-1 bg-gray-800 rounded transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`w-full h-1 bg-gray-800 rounded transform transition-transform duration-300 ${
          isOpen ? "-rotate-45 translate-x-[5px] -translate-y-[6px]" : ""
        }`}
      ></span>
    </button>

   
  </div>

  {/* Nav Items */}
  <ul
    className={`lg:flex lg:items-center items-end font-medium text-xl transition-transform duration-300 ${
      isOpen
        ? "absolute top-full left-0 w-full bg-gray-200 shadow-md py-4 px-6 flex flex-col space-y-4"
        : "hidden"
    } lg:relative lg:flex-row lg:space-y-0 lg:space-x-8 lg:py-0 lg:px-0 lg:bg-transparent`}
  >
    {navItems.map((item) => (
      <li key={item.id} className="relative">
        <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to={item.id}
                  className={`text-gray-500 hover:text-gray-700 transition duration-300 ${
                    activeNavItem === item.id ? "text-gray-800 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setActiveNavItem(item.id);
                    setIsOpen(false); 
                  }}
                >
                  {item.label}
                  {activeNavItem === item.id && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 bottom-0 h-[2.5px] w-full bg-gray-800"
            />
          )}
                </Link>
              </motion.div>
      </li>
    ))}

    {/* Theme Toggle Button (Desktop Only) */}
    <li className="hidden lg:block">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-700 text-gray-200 dark:text-yellow-400 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <motion.div
            whileHover={{ rotate: 15 }}
            whileTap={{ rotate: -15, scale: 0.9 }}
          >
            <BsMoon size={20} />
          </motion.div>
        ) : (
          <motion.div
            whileHover={{ rotate: -15 }}
            whileTap={{ rotate: 15, scale: 0.9 }}
          >
            <BsSun size={20} />
          </motion.div>
        )}
      </button>
    </li>
  </ul>
</div>

  </nav>
  

  );
};

export default Navbar;




