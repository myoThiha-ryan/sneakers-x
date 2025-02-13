import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center bg-coral-red text-white gap-2 px-7 py-4 border font-montserrat text-lg leading-none border-coral-red rounded-full">
      {label}
      <img
        className="ml-2 rounded-full w-5 h-5"
        src={iconURL}
        alt="right-arrow-icon"
      />
    </button>
  );
};

export default Button;
