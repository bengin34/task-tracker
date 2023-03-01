import React from "react";

const Button = ({hideShowAddTaskBar,showAddTaskBar }) => {


  return (
    <div>
      <button onClick={() => hideShowAddTaskBar()} className="w-3/4 bg-blue-500  rounded-md  text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mt-3">
        {!showAddTaskBar ? "Show Add Task Bar" : "Close Add Task Bar" }{" "}
      </button>
    </div>
  );
};

export default Button;
