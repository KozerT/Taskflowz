import React from "react";
import NewTask from "./NewTask";

const Tasks = () => {
  return (
    <section>
      <h2 className=" text-2xl  font-semibold  text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      <p className=" text-stone-600 mb-4  my-4">
        This project does not have any tasks yet.
      </p>
      <ul></ul>
    </section>
  );
};

export default Tasks;
