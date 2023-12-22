import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, UpdatedNewTask }: any) {
  const [show, setShow] = useState(false);
  const removefunc = () => {
    onDelete(task.id);
  };
  const updatefunc = () => {
    setShow(!show);
  };
  const HandleUpdate = (id: any, UpdatedTitle: any, UpdatedTextdesc: any) => {
    setShow(false);
    UpdatedNewTask(id, UpdatedTitle, UpdatedTextdesc);
  };

  return (
    <div className="task-card">
      {show ? (
        <>
          {" "}
          <TaskCreate
            task={task}
            updateform={true}
            onUpdate={HandleUpdate}
          />{" "}
        </>
      ) : (
        <div>
          <h4 className="task-title">Your Task</h4>
          <p>{task.title}</p>
          <h4 className="task-title">Things to do</h4>
          <p>{task.textdesc}</p>
          <div>
            <button className="btn-rmv" onClick={removefunc}>
              remove
            </button>
            <button className="btn-updt" onClick={updatefunc}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
