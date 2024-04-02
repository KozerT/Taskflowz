import images from "../assets/images.js";

const NewTask = () => {
  return (
    <form id="new-task">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </p>

      <p>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" />
      </p>

      <p>
        <label htmlFor="deadline">Deadline</label>
        <input type="date" name="deadline" id="deadline" />
      </p>

      <ul id="new-task-images">
        <li>Images</li>
      </ul>

      <p className="new-task-actions">
        <button type="button">Cancel</button>
        <button>Add Challenge</button>
      </p>
    </form>
  );
};

export default NewTask;
