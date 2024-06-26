import { useContext } from "react";
import { TasksContext } from "../store/tasks-context";
import { motion, AnimatePresence } from "framer-motion";

const TaskItem = ({ task, onViewDetails, isExpanded }) => {
  const { updateTaskStatus } = useContext(TasksContext);

  const formattedDate = new Date(task.deadline).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleCancel = () => {
    updateTaskStatus(task.id, "failed");
  };

  const handleComplete = () => {
    updateTaskStatus(task.id, "completed");
  };

  return (
    <motion.li layout exit={{ opacity: 0, y: -10 }}>
      <article className="task-item">
        <header>
          <img {...task.image} />
          <div className="task-item-meta">
            <h2>{task.title}</h2>
            <p>Complete until {formattedDate}</p>
            <p className="task-item-actions">
              <button onClick={handleCancel} className="btn-negative">
                Mark as failed
              </button>
              <button onClick={handleComplete}>Mark as completed</button>
            </p>
          </div>
        </header>
        <div className={`task-item-details ${isExpanded ? "expanded" : ""}`}>
          <p>
            <button onClick={onViewDetails}>
              View Details{" "}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="task-item-details-icon"
              >
                &#9650;
              </motion.span>
            </button>
          </p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <p className="task-item-description">{task.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </motion.li>
  );
};

export default TaskItem;
