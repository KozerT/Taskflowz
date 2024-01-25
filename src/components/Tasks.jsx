/* eslint-disable react/prop-types */
import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className=" text-2xl  font-semibold  text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className=" text-stone-600 mb-4  mt-8 ">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 ">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="text-xs md:text-base flex justify-between border-blue-100  my-4 px-2 py-2 rounded-md  border bg-stone-50 text-stone-600 drop-shadow-sm "
            >
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-300">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
