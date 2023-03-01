import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";


function App() {
  const [showAddTaskBar, setShowAddTaskBar] = useState(true)

  const hideShowAddTaskBar = () =>{
    setShowAddTaskBar(!showAddTaskBar)
  }

  return (
    <div className="App">
    <div className="mx-auto mt-16 bg-[orange] border" style={{width:"400px", height:"500px" }}>
    <Header  showAddTaskBar={showAddTaskBar}  hideShowAddTaskBar={hideShowAddTaskBar}/>

{showAddTaskBar ? <AddTask /> : null }
    


    </div>
 
    </div>
  );
}

export default App;
