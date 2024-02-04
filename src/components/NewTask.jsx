import React, { useState } from "react";

const NewTask = ({ onAddTask, onDeleteTask }) => {
  const [enteredTask, setEnteredTask] = useState();

  const changeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  const clickHandler = () => {
    if (enteredTask.trim() === "") {
      return;
    }

    onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={changeHandler}
        value={enteredTask}
      />
      <button
        onClick={clickHandler}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
