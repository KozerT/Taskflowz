import InputField from "./InputField.jsx";
import React from "react";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-gray-500 font-normal px-2 py-2 text-xs md:text-base border  border-blue-200  rounded-md hover:shadow-md">
            Cancel
          </button>
        </li>
        <li>
          <button className="font-medium text-white bg-blue-400  hover:bg-blue-500 px-4 py-2 text-xs md:text-base rounded-md  shadow-lg  hover:shadow-xl ">
            Save
          </button>
        </li>
      </menu>
      <div>
        <InputField label="Title" />
        <InputField label="Description" textarea />
        <InputField label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
