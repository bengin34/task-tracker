import React from "react";

const AddTask = () => {
  return (
    <div className="container items-center text-center mt-3">
      <form className="container p-2">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-left text-md font-medium text-gray-900"
          >
            Task
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Add Task"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Add"
            className="block mb-2 text-left text-md font-medium text-gray-900"
          >
            Day & Time
          </label>
          <input
            placeholder="Enter Day and Time"
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-6"></div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
