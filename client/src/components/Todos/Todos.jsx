import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Layout/Header';
import TodoForm from './TodoForm';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchAllTodos() {
      try {
        const fetchedTodos = await axios.get(import.meta.env.VITE_API_URI);
        setTodos(fetchedTodos.data.todos);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllTodos();
  }, []);

  const todosMapped = todos.map((todo) => {
    return (
      <Todo
        key={todo._id}
        id={todo._id}
        name={todo.name}
        completed={todo.completed}
        setTodos={setTodos}
      />
    );
  });

  return (
    <div className="w-[60%] h-[60%] bg-zinc-800 shadow-xl px-[5%] rounded-2xl pb-[2%] flex flex-col items-center gap-8">
      <Header />
      <TodoForm setTodos={setTodos} />
      <div className="w-full h-full px-4 overflow-auto">{todosMapped}</div>
    </div>
  );
};

export default Todos;
