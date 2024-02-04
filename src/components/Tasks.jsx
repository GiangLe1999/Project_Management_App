import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onDeleteTask, selectProjectId }) => {
  const projectTasks = tasks.filter(
    (task) => task.projectId == selectProjectId
  );

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {projectTasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This projects does not have any tasks yet.
        </p>
      )}
      {projectTasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projectTasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 gap-1">
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
