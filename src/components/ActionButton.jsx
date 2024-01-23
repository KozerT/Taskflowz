import React from "react";

const ActionButton = ({ children, ...props }) => {
  return (
    <button
      className="font-medium text-white bg-blue-400  hover:bg-blue-500 px-4 py-2 text-xs md:text-base rounded-md  shadow-lg  hover:shadow-xl "
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
