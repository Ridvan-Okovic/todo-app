import React from 'react';
import Todos from '../components/Todos/Todos';

const TodosPage = () => {
  return (
    <div className="w-full h-[calc(100%-5rem)] grid place-items-center">
      <Todos />
    </div>
  );
};

export default TodosPage;
