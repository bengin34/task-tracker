import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Alert from "./components/Alert";

function App() {
  const [showAddTaskBar, setShowAddTaskBar] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    color: "",
    msg: "",
  });

  const hideShowAddTaskBar = () => {
    setShowAddTaskBar(!showAddTaskBar);
  };

  const handleAddTask = (newTask) => {
    showAlert(true, "green", "task added to the list");
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id) => {
    showAlert(true, "red", "task deleted");
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const showAlert = (show = false, color = "", msg = "") => {
    setAlert({ show, color, msg });
  };

  useEffect(() => {}, [tasks]);

  return (
    <div className="App">
      <div
        className="mx-auto mt-16  rounded-2xl bg-[orange] border"
        style={{
          maxWidth: "400px",
          minWidth: "300px",
          maxHeight: "1000px",
          minHeight: "150px",
        }}
      >
        <Header
          showAddTaskBar={showAddTaskBar}
          hideShowAddTaskBar={hideShowAddTaskBar}
        />
        {showAddTaskBar ? <AddTask addNewTask={handleAddTask} /> : null}
        {alert.show && <Alert {...alert}  removeAlert={showAlert}
        tasks={tasks} /> }
        <Tasks tasks={tasks} showAlert={showAlert} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
