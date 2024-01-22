import React from "react";

const InputField = ({ label, textArea, ...props }) => {
  const classes =
    " rounded w-full p-1 border bg-stone-50 text-stone-600 focus:outline-none focus:border-blue-200  drop-shadow-sm focus:drop-shadow-md";
  return (
    <p className="flex flex-col gap-1 my-4  ">
      <label htmlFor="" className="text-sm font-bold  uppercase text-stone-500">
        {label}
      </label>
      {textArea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input {...props} className={classes} />
      )}
    </p>
  );
};

export default InputField;
