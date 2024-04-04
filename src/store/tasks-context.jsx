import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  updateTaskStatus: () => {},
});

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [
      { ...task, id: Math.random().toString(), status: "active" },
      ...prevTasks,
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  const tasksContext = {
    tasks,
    addTask,
    deleteTask,
    updateTaskStatus,
  };

  return (
    <TasksContext.Provider value={tasksContext}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskContextProvider;

TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
