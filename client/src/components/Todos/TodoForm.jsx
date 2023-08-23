import { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ setTodos }) => {
  const [todo, setTodo] = useState('');

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newTodo = await axios.post(import.meta.env.VITE_API_URI, {
        name: todo,
      });

      if (newTodo.status === 201) {
        const newTodos = await axios.get(import.meta.env.VITE_API_URI);
        setTodos(newTodos.data.todos);
        setTodo('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-full h-14 flex" onSubmit={submitHandler}>
      <input
        value={todo}
        onChange={todoChangeHandler}
        className="w-[85%] h-full pl-6 bg-[#363636] focus:border-orange-500 focus:border-[0.1rem] outline-none rounded-l-md"
        placeholder="To-Do..."
      />
      <button className="w-[15%] h-full bg-orange-500 rounded-r-md shadow-lg hover:opacity-80 transition-all border-none">
        Add
      </button>
    </form>
  );
};

export default TodoForm;