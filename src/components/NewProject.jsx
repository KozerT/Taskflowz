import InputField from "./InputField.jsx";
import React from "react";
import ActionButton from "./ActionButton.jsx";

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
          <ActionButton>Save</ActionButton>
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
