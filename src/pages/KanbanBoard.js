import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', stage: 'todo' },
    { id: 2, title: 'Task 2', stage: 'in-progress' },
    { id: 3, title: 'Task 3', stage: 'done' },
  ]);

  const handleDrop = (e, stage) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('task_id');
    const updatedTasks = tasks.map(task => {
      if (task.id === parseInt(taskId)) {
        return { ...task, stage: stage };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const allowDrop = e => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-4xl flex justify-around space-x-3">
        <div
          className="w-1/3 p-4 bg-gray-200 rounded-lg "
          onDrop={e => handleDrop(e, 'todo')}
          onDragOver={allowDrop}
        >
          <h2 className="text-lg font-semibold mb-4">To Do</h2>
          {tasks
            .filter(task => task.stage === 'todo')
            .map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
        <div
          className="w-1/3 p-4 bg-gray-200 rounded-lg"
          onDrop={e => handleDrop(e, 'in-progress')}
          onDragOver={allowDrop}
        >
          <h2 className="text-lg font-semibold mb-4">In Progress</h2>
          {tasks
            .filter(task => task.stage === 'in-progress')
            .map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
        <div
          className="w-1/3 p-4 bg-gray-200 rounded-lg"
          onDrop={e => handleDrop(e, 'done')}
          onDragOver={allowDrop}
        >
          <h2 className="text-lg font-semibold mb-4">Done</h2>
          {tasks
            .filter(task => task.stage === 'done')
            .map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
