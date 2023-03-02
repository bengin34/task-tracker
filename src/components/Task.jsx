import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Task = ({ task, handleDelete }) => {
  const dateTime = new Date(task.date);
  const formattedDateTime = dateTime.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="w-full max-w-sm p-4">
      <ul className="my-4 space-y-3">
        <li>
          <div
            href="#"
            className="block p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
          >
            <div className="flex ">
              {" "}
              <span className="flex-1 ml-3 whitespace-nowrap">
                {task.title}
              </span>
              <button
                onClick={() => handleDelete(task.id)}
                className="inline-flex text-right px-2 py-0.5 ml-3 text-xs font-mediumrounded"
              >
                <RiDeleteBinLine className="text-2xl my-1" />
              </button>
            </div>

            <div className="flex text-sm ml-3">
              {" "}
              <p>{formattedDateTime}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Task;
