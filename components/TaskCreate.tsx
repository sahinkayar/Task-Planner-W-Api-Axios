import { useState } from "react";

function TaskCreate({ showitems, task, updateform, onUpdate }: any) {
  const [textdesc, setTextDesc] = useState(task ? task.textdesc : "");
  const [title, setTitle] = useState(task ? task.title : "");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (updateform === true) {
      onUpdate(task.id, title, textdesc);
    } else {
      showitems({ title, textdesc });
    }

    setTextDesc("");
    setTitle("");
  };

  return (
    <div>
      {updateform ? (
        <div className="Task-updated">
          <h4>Please edit the Title!</h4>
          <form>
            <label>Edit Title</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <label>Edit Task!</label>
            <textarea
              rows={3}
              onChange={(e) => {
                setTextDesc(e.target.value);
              }}
              value={textdesc}
            ></textarea>
            <button className="btn-updated" onClick={handleSubmit}>
              Set
            </button>
          </form>
        </div>
      ) : (
        <div className="main">
          <h3>Please Add a Task!</h3>
          <form>
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <label>Add Task!</label>
            <textarea
              rows={3}
              onChange={(e) => {
                setTextDesc(e.target.value);
              }}
              value={textdesc}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
