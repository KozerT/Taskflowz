import React from "react";

const SideBar = ({ onAddProject }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-cyan-50  md:w-72 rounded-r-xl shadow-lg  ">
      <h2 className="mb-8  font-bold uppercase md:text-xl">Your Projects</h2>
      <div>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-blue-600  hover:bg-blue-700 shadow-md  hover:shadow-lg "
          onClick={onAddProject}
        >
          Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default SideBar;
