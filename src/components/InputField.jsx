import React, { forwardRef } from "react";

const InputField = forwardRef(function InputField(
  { label, textarea, type, ...props },
  ref
) {
  const classes =
    " rounded w-full p-1 border bg-stone-50 text-stone-600 focus:outline-none focus:border-blue-200  drop-shadow-sm focus:drop-shadow-md";
  return (
    <p className="flex flex-col gap-1 my-4  ">
      <label htmlFor="" className="text-sm font-bold  uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} ref={ref} />
      ) : (
        <input {...props} className={classes} ref={ref} />
      )}
    </p>
  );
});

export default InputField;
