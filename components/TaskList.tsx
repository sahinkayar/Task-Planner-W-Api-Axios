import React from "react";
import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete, UpdatedNewTask }: any) {
  return (
    <div className="task-list">
      {tasks.map((task: any, index: number) => {
        return (
          <TaskShow
            key={index}
            task={task}
            onDelete={onDelete}
            UpdatedNewTask={UpdatedNewTask}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
