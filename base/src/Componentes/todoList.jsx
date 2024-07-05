import React from 'react';

const TodoList = ({ tasks }) => (
  <ul>
    {tasks.map((task, index) => (
      <li key={index}>{task}</li>
    ))}
  </ul>
);

export default TodoList;
