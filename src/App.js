import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showAddTaskBar, setShowAddTaskBar] = useState(true);
  const [tasks, setTasks] = useState([]);

  const hideShowAddTaskBar = () => {
    setShowAddTaskBar(!showAddTaskBar);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);

  };

  const handleDelete = (id) =>{
    setTasks(tasks.filter((item) => item.id !== id ))
  }

  useEffect(() => {
  }, [tasks]);

  return (
    <div className="App">
      <div
        className="mx-auto mt-16  bg-[orange] border"
        style={{ width: "400px", maxHeight: "1000px", minHeight: "150px" }}
      >
        <Header
          showAddTaskBar={showAddTaskBar}
          hideShowAddTaskBar={hideShowAddTaskBar}
        />
        {showAddTaskBar ? <AddTask addNewTask={handleAddTask} /> : null}
        <Tasks tasks={tasks} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
