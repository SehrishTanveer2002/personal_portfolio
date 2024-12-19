import React from "react";

const Button = ({ text, styleType, onClick }) => {
  const baseStyle = "z-10 py-2 px-6 rounded-full font-semibold text-xl focus:outline-none transition-colors";
  
  const styleVariants = {
    primary: "bg-gray-800 text-white hover:bg-gray-700",
    secondary: "text-gray-600 border-[2.5px] border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300",
  };

  const buttonStyle = styleVariants[styleType] || styleVariants.primary;

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${buttonStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;



