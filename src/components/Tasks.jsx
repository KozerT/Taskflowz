import { useContext, useState } from "react";
import TaskTabs from "./TaskTabs";
import { TasksContext } from "../store/tasks-context";
import TaskItem from "./TaskItem";
import { AnimatePresence, motion } from "framer-motion";

const Tasks = () => {
  const { tasks } = useContext(TasksContext);
  const [selectedType, setSelectedType] = useState("active");
  const [expanded, setExpanded] = useState(null);

  const handleSelectType = (newType) => {
    setSelectedType(newType);
  };

  const handleViewDetails = (id) => {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  };

  const filteredTasks = {
    active: tasks.filter((task) => task.status === "active"),
    completed: tasks.filter((task) => task.status === "completed"),
    failed: tasks.filter((task) => task.status === "failed"),
  };

  const displayedTasks = filteredTasks[selectedType];

  return (
    <div id="tasks">
      <TaskTabs
        tasks={filteredTasks}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        <AnimatePresence mode="wait">
          {displayedTasks.length > 0 && (
            <motion.ol key="list" className="task-items">
              <AnimatePresence>
                {displayedTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onViewDetails={() => handleViewDetails(task.id)}
                    isExpanded={expanded === task.id}
                  />
                ))}
              </AnimatePresence>
            </motion.ol>
          )}
          {displayedTasks.length === 0 && (
            <motion.p
              key="fallback"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              No tasks found.
            </motion.p>
          )}
        </AnimatePresence>
      </TaskTabs>
    </div>
  );
};

export default Tasks;
