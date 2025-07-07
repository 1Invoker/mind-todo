import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import { useTodos } from '../hooks/useTodos';
import '../styles/ToDo.css';

const TodoApp: React.FC = () => {
  const {
    filteredTodos,
    addTodo,
    toggleTodo,
    clearCompleted,
    filter,
    setFilter,
    activeCount
  } = useTodos();

  return (
    <div className="todo-app">
      <h1>todos</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} />
      <TodoFooter
        activeCount={activeCount}
        filter={filter}
        setFilter={setFilter}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};

export default TodoApp;
