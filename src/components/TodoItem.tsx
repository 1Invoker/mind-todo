import React from 'react';
import { Todo } from '../models/Todo';

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
    </li>
  );
};

export default TodoItem;
