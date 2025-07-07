import React from 'react';

interface Props {
  activeCount: number;
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  onClearCompleted: () => void;
}

const TodoFooter: React.FC<Props> = ({ activeCount, filter, setFilter, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span>{activeCount} items left</span>
      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>All</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'selected' : ''}>Active</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>Completed</button>
      </div>
      <button onClick={onClearCompleted}>Clear completed</button>
    </footer>
  );
};

export default TodoFooter;
