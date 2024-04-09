import { useContext, useRef, useState } from "react";
import images from "../assets/images.js";
import { TasksContext } from "../store/tasks-context.jsx";
import Modal from "./Modal.jsx";
import { motion } from "framer-motion";

const NewTask = ({ onDone }) => {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addTask } = useContext(TasksContext);

  const handleSelectedImage = (image) => {
    setSelectedImage(image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };
    if (
      !task.title.trim() ||
      !task.description.trim() ||
      !task.deadline.trim() ||
      !task.image
    ) {
      return;
    }

    onDone();
    addTask(task);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <Modal title="New Task" onClose={onDone} stopPropagation={stopPropagation}>
      <form id="new-task" onSubmit={handleSubmit} className="new-task-form">
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" ref={title} />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" ref={description} />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input type="date" name="deadline" id="deadline" ref={deadline} />
        </p>

        <motion.ul
          id="new-task-images"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {images.map((image) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              exit={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              key={image.alt}
              onClick={() => handleSelectedImage(image)}
              className={selectedImage === image ? "selected" : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>
        <p className="new-task-actions">
          <button
            type="button"
            className="cancel-btn modal-btn"
            onClick={onDone}
          >
            Cancel
          </button>
          <button className="primary-btn modal-btn" type="submit">
            Add Task
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default NewTask;
