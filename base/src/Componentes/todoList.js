import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
