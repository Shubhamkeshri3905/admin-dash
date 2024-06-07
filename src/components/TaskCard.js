import React from 'react';

const TaskCard = ({ task }) => {
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('task_id', id);
  };

  return (
    <div
      className="bg-white rounded-lg shadow p-4 mb-4 cursor-move"
      draggable
      onDragStart={e => handleDragStart(e, task.id)}
    >
      <p className="font-semibold">{task.title}</p>
      <p className="text-sm text-gray-500">{task.stage}</p>
    </div>
  );
};

export default TaskCard;
