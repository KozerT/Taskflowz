import React from "react";
import ActionButton from "./ActionButton";

const ProjectSelectionEmpty = () => {
  return (
    <div className=" mt-4 text-center w-2/3 ">
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4 ">
        Choose from your existing projects or create a new one.
      </p>
      <p className="mt-8">
        <ActionButton>Create a new project</ActionButton>
      </p>
    </div>
  );
};

export default ProjectSelectionEmpty;
