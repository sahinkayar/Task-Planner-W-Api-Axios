import { useState, useEffect } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";
interface task {
  id: number;
  title: any;
  textdesc: any;
}
function App() {
  const [tasks, setTasks] = useState<task[]>([]);
  const listFunc = async ({ title, textdesc }: task) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title: title,
      textdesc: textdesc,
    });
    console.log(response);

    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };
  const fetchtasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchtasks();
  }, []);

  const deletingfunc = async (id: any) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingSucks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingSucks);
  };

  const handleSetTask = async (
    id: any,
    UpdatedTitle: any,
    UpdatedTextdesc: any
  ) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: UpdatedTitle,
      textdesc: UpdatedTextdesc,
    });
    const UpdatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: UpdatedTitle, textdesc: UpdatedTextdesc };
      }
      return task;
    });
    setTasks(UpdatedTasks);
  };
  return (
    <>
      <div className="app">
        <TaskCreate showitems={listFunc} />
        <h1>Tasks</h1>
        <TaskList
          tasks={tasks}
          onDelete={deletingfunc}
          UpdatedNewTask={handleSetTask}
        />
      </div>
    </>
  );
}

export default App;
